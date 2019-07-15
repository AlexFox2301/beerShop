
export default {

  data(){
    return{
      resourceSale: null,
      resourceSupply: null,

      general: [],

      search: '',
      startDate: null,
      endDate: null
    }
  },

  methods:{

    resetSearch(){

      this.general = this.orders.concat(this.supplies);

      this.general = this.general.sort(function(a, b){
        return new Date(b.date) - new Date(a.date)});

      this.search = '';
      this.startDate = null;
      this.endDate = null;
    },

    scan(){

      const searches = [];

      try {
        for (let i=0; i<this.general.length; i++){

          // if (this.general[i].sum.toString() === this.search) {
          if (this.general[i].worker.name.toLowerCase() === this.search.toLowerCase() ||
            this.general[i].sum.toString() === this.search) {
            searches.push(this.general[i]);
            continue;
          }

          try {
            if (this.general[i].provider.name.toLowerCase() === this.search.toLowerCase()) {
              searches.push(this.general[i]);
              continue;
            }
          }catch (e) {}

          for (let j=0; j<this.general[i].positions.length; j++){

            if (this.general[i].positions[j].sortName.toLowerCase() === this.search.toLowerCase() ||
              this.general[i].positions[j].volume.toString().toLowerCase() === this.search.toLowerCase() ||
              this.general[i].positions[j].cost.toString().toLowerCase() === this.search.toLowerCase()) {

              searches.push(this.general[i]);
              continue;
            }
          }
        }
        this.general = searches;
      }catch (e) {
        alert('Ой! Что-то пошло не так.');
      }



    },

    collectionPeriod(){
    const collection = [];

    let start = new Date(this.startDate);
    let end = new Date(this.endDate).getTime() + 24*60*60*1000;

    for (let i=0; i<this.general.length; i++)
    {

      if (this.startDate === null) {
        if (new Date(this.general[i].date) <= end) {
          collection.push(this.general[i]);
        }
      }else{
        if (this.endDate === null){
          if (new Date(this.general[i].date) >= start) {
            collection.push(this.general[i]);
          }
        } else {
          if (new Date(this.general[i].date) >= start & new Date(this.general[i].date) <= end)
          {
            collection.push(this.general[i]);
          }
        }
      }
    }
    this.general = collection;
  },

    delete(supply){
      this.$http.delete('http://localhost:3000/supplies/' + supply.id)
        .then(response => {return response.json()});
    }

},

}
