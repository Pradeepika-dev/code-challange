<template>
  <div>
    <div class="search-container">
          <div class="form-group">
            <select v-model="selectedFile" class="form-control">
              <option :value="null">-- Please select data file --</option>
              <option v-for="(file, index) in dataFileNames" v-bind:key="index" :value="index">{{ file }}</option>
            </select>
          </div>
          <div class="form-group" >
            <select v-model="selectedSearchTerm" class="form-control">
              <option :value="null">-- Please select search term --</option>
              <option v-for="(term, index) in selectedSearchableFields" v-bind:key="index" :value="term">{{ term }}</option>
            </select>
          </div>
          <div class="form-group" >
            <input  type="text" v-model="searchValue" class="form-control" placeholder="Search value">
          </div>
          <button :disabled="selectedSearchTerm ==null" class="btn-search" type="button" @click="search">Search</button>
    </div>
    <SearchResult :search="searchResult"></SearchResult>
  </div>
</template>

<script>
import organizationsDataFile from '../data/organizations'
import ticketsDataFile from '../data/tickets'
import usersDataFile from '../data/users'
import SearchResult from './SearchResult'

export default {
  name: 'Search',
  components: {
    SearchResult
  },
  data () {
    return {
      dataFiles: {
        organizations: organizationsDataFile,
        tickets: ticketsDataFile,
        users: usersDataFile
      },
      dataFileNames: {
        organizations: 'Organizations', tickets: 'Tickets', users: 'Users'
      },
      selectedFile: null,
      selectedSearchableFields: {},
      selectedSearchTerm: null,
      searchValue: null,
      searchResult: null
    }
  },
  watch: {
    selectedFile: function (fileName) {
      this.selectedSearchTerm = null
      this.selectedSearchableFields = this.getSearchTerms(fileName)
    }
  },
  methods: {
    getSearchTerms (filename) {
      const entity = this.dataFiles[filename][0]
      return this.getFieldNames(entity)
    },
    getFieldNames (entity) {
      const fieldNames = Object.keys(entity)
      return fieldNames
    },
    search () {
      this.findSearchResults(this.searchValue, this.dataFiles, this.selectedFile, this.selectedSearchTerm)
    },
    findSearchResults (searchValue, dataFiles, selectedFile, selectedSearchTerm) {
      const jsonFormatData = dataFiles[selectedFile]
      let result = null
      result = jsonFormatData.find(item => {
        console.log(item, selectedSearchTerm, searchValue)
        // eslint-disable-next-line eqeqeq
        return item[selectedSearchTerm] == searchValue
      })
      console.log(result)
      this.searchResult = result
    }
  }
}

</script>

<style scoped>
  .search-container{
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
    background: green;
  }
  button.btn-search {
    width: 50%;
    background: black;
    color: #fff;
    border: black;
    padding: 10px;
    border-radius: 10px;
  }
</style>
