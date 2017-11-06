import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    runDemo: function(){
      // good practice to declare store variable
      let store = this.store;

      let newBug = store.createRecord('bug', {
        title: 'Demo bug',
        description: 'Demo description'
      });

      // Save Create record
      newBug.save().then(function(){
        console.log('record saved');
      })

      // Load record by Id
      let loadedRecord = store.findRecord('bug', 'h79mf').then(function(loadedRecord){
        console.log(loadedRecord.get('title'));
      });

      // Updated Record
      store.findRecord('bug', 'h79mf').then(function(loadedRecord){
        loadedRecord.set('title', 'Updated title');
        loadedRecord.save().then(()=>{
          console.log('Saved record')
        })
      });

    }
  }
});
