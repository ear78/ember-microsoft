import Ember from 'ember';

const BugEditorComponent = Ember.Component.extend({
  actions: {
    save: function(model){
      let component = this;
      model.save().then(()=>{
        console.log('model saved');
        component.sendAction('handleRedirect');
      })
    }
  }
});

BugEditorComponent.reopenClass({
  positionalParams: ['bug']
});

export default BugEditorComponent;
