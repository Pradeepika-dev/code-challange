 <template>
  <div class="search-result-container">
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th>Field Name</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(result,index) in search" v-bind:key="index">
        <td>{{ index }}</td>
        <td>{{result}}</td>
        </tr>
        <tr v-if="search==null">
          <td colspan="2"> No results found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['search']
}
</script>

<style scoped>
  .search-result-container {
    margin: auto;
    width: 50%;
  }
</style>
