/**
 * Created by Administrator on 2016/1/15 0015.
 */
//var Todo=Backbone.Model.extend({});
//var todo1=new Todo();
//console.log(JSON.stringify(todo1));
//var todo2=new Todo({
//    title:'check the attributes of both model instance in the console',
//    completed:true
//});
//console.log(JSON.stringify(todo2));

//var Todo=Backbone.Model.extend({
//    initialize:function(){
//        console.log('This model hai been initialized')
//    }
//});
//var myTodo=new Todo();

//var Todo=Backbone.Model.extend({
//    defaults:{
//        title:'',
//        completed:false
//    }
//});

//var todo1=new Todo();
//console.log(JSON.stringify(todo1));
//var todo2 =new Todo({
//    title:'check attributes of the logged models in the console'
//});
//console.log(JSON.stringify(todo2));
//var todo3=new Todo({
//    title:'this todo is done,so take no action on this one',
//    completed:true
//});
//console.log(JSON.stringify(todo3));

//var Todo=Backbone.Model.extend({
//    defailts:{
//        title:'',
//        completed:false
//    }
//});
//var todo1=new Todo();
//console.log(todo1.get('title'));
//console.log(todo1.get('completed'));
//
//var todo2=new Todo({
//    title:"retrieved with model's get() method",
//    completed:true
//});
//
//console.log(todo2.get('title'));
//console.log(todo2.get('completed'));

//var todo1=new Todo();
//var todo1Attributes=todo1.toJSON();
//console.log(todo1Attributes);
//
//var todo2=new Todo({
//    title:"try these examples and check results in console.",
//    completed:true
//});
//console.log(todo2.toJSON());

//var Todo=Backbone.Model.extend({
//    defaults:{
//        title:'',
//        completed:false
//    }
//});
//var myTodo=new Todo({
//    title:"set throuth instantiation."
//});
//console.log('Todo title'+myTodo.get('title'));
//console.log('completed:'+myTodo.get('completed'));
//
//myTodo.set("title","title attribute set through Model.set()");
//console.log("Todo title:"+myTodo.get('title'));
//console.log("completes:"+myTodo.get("completed"));
//
//myTodo.set({
//    title:"both attributes set throuth Model.get('title)",
//    completed:true
//});
//console.log("Todo title:"+myTodo.get('title'));
//console.log("completes:"+myTodo.get("completed"));
//
//var Todo=Backbone.Model.extend({
//    defaults:{
//        title:'',
//        completed:false
//    },
//    initialize:function(){
//        console.log('this model has been initialize.');
//        this.on('change:title',function(){
//            console.log('-Values for this model have changed');
//        });
//    }
//});
//var myTodo=new Todo();
//myTodo.set('title','the listener is triggerd whenever an attribute//value changes');
//console.log('title has changes:'+myTodo.get('title'));
//myTodo.set('completed',true);
//console.log('completed has changed:'+myTodo.get('completed'));
//myTodo.set({
//    title:'changing more than one attributes at the same time only triggrs//the listener once',
//    completed:true
//});

//var Person=new Backbone.Model({name:'Jeremy'});
//Person.validate=function(attrs){
//    if(!attrs.name){
//        return 'i need you name';
//    }
//}
//Person.set({name:'Samuel'});
//console.log(Person.get('name'));
//Person.unset('name',{validate:true});

//var Todo=Backbone.Model.extend({
//    defaults:{
//        completed:false
//    },
//    validate:function(attribs){
//        if(attribs.title===undefined){
//            return "remember to set a title for your todo";
//        }
//    },
//    initialize:function(){
//        console.log('this model has been initialize');
//        this.on("invalid",function(model,error){
//            console.log(error);
//        })
//    }
//})
//
//var myTodo=new Todo();
//myTodo.set('completed',true,{validate:true});
//console.log('completed:'+myTodo.get('completed'));

//var TodosView=Backbone.View.extend({
//    tagName:'ul',
//    className:'container',
//    id:'todos'
//});
//var todosView=new TodosView();
//console.log(todosView.el);

    //有问题

//var button1=$('<button></button>');
//var button2=$('<button></button>');
//var View=Backbone.View.extend({
//    events:{
//        click:function(e){
//            console.log(view.el=== e.target);
//        }
//    }
//});
//var view=new View({el:button1});
//view.setElement(button2);
//button1.trigger('click');
//button2.trigger('click');
//
//var view=new Backbone.View;
//view.setElement('<p><a><b>test</b></a></p>');
//view.$('a b').html();
    //有问题
//var ListView =Backbone.View.extend({
//    reader:function(){
//       var items=this.model.get('item');
//        _.each(items, function (item) {
//            var itemView=new ItemView({model:item});
//            this.$el.append(itemView.reader().el);
//        },this);
//    }
//});
//var ItemView=Backbone.View.extend({
//    events:{},
//    reader:function(){
//        this.$el.html(this.model.toJSON());
//        return this;
//    }
//})
//


//var TodoView=Backbone.View.extend({
//    tagName:li,
//    events:{
//        'click.toggle()':'toggleCompleted',
//        'dbclick lable':'edit',
//        'click .destroy':'clear',
//        'blur .edit':'close'
//},
//})
    //集合
// var Todo=Backbone.Model.extend({
//    defaults:{
//        title:'',
//        completed:false
//    }
//});
//
//var TodoCollection=Backbone.Collection.extend({
//    model:Todo
//});
//var myTodo=new Todo({title:'read the whole book',id:2});
//var todos=new TodoCollection([myTodo]);
//console.log("collection size"+todos.length);

var Todo=Backbone.Model.extend({
    defaults:{
        title:'',
        completed:false
    }
});

//var TodoCollection=Backbone.Collection.extend({
//    model:Todo,
//})
//
//var a=new Todo({title:'Go to jamaica'}),
//    b=new Todo({title:'Go to China'}),
//    c=new Todo({title:'Go to Japan'});
//var todos=new TodoCollection([a,b]);
//console.log("Collection size:"+todos.length);
//todos.add(c);
//console.log("Collection size:"+todos.length);
//todos.remove([a,b]);
//console.log("Collection size:"+todos.length);
//todos.remove(c);
//console.log("Collection size:"+todos.length);

//var items=new Backbone.Collection;
//items.add([{id:1,name:"dog",age:3},{id:2,name:"cat",age:2}]);
//items.add([{id:1,name:"bear"}],{merge:true});
//items.add([{id:2,name:"lion"}]);
//console.log(JSON.stringify(items.toJSON()));
//var TodosCollection=Backbone.Collection;
//var myTodo=new Todo({title:'read the whole book',id:2});
//var todos=new TodosCollection([myTodo]);
//var todo2=todos.get(2);
//console.log(todo2===myTodo);

//var TodoCollection=new Backbone.Collection();
//TodoCollection.on("add",function(todo){
//    console.log("I should"+todo.get("title")+".have i done it before?"+
//        (todo.get("completed")?'yeah!':'no.'));
//});
//TodoCollection.add([
//    {title:'Go to jamaica',completed:false},
//    {title:'Go to china',completed:false},
//    {title:'Go to disney',completed:true}
//]);
//
//TodoCollection.on("change:title",function(model){
//    console.log("change my mind! i should "+model.get('title'));
//})
//TodoCollection.add([
//    {title:'Go to jamaica',completed:false,id:3},
//]);
//var myTodo=TodoCollection.get(3);
//myTodo.set('title','go fishing');
//
//var Todo=Backbone.Model.extend({
//    defaults:{
//        title:'',
//        completes:false
//    }
//});
//var myTodo=new Todo();
//myTodo.set({title:'buy some cookies',completed:true});
//myTodo.on({
//    'change:title':titlechanged,
//    'change:completed':statechanged
//});
//function titlechanged(){
//    console.log('the title was changed!');
//}
//function statechanged(){
//    console.log('the atate was changed!');
//}
//myTodo.set({title:'get the groceries'});

//var TodoCounter={counterA:0,counterB:0};
//_.extend(TodoCounter,Backbone.Events);
//var incrA=function(){
//    TodoCounter.counterA+=1;
//    TodoCounter.trigger('event');
//};
//var incrB=function(){
//    TodoCounter.counterB+=1;
//};
//TodoCounter.once('event',incrA);
//TodoCounter.once('event',incrB);
//TodoCounter.trigger('event');
//console.log(TodoCounter.counterA===1);
//console.log(TodoCounter.counterB===1);

var TodoCollection=new Backbone.Collection();
//TodoCollection.add([
//    {id:1,title:'Go to jamaica',completed:false},
//    {id:2,title:'Go to china',completed:false},
//    {id:3,title:'Go to disney',completed:true}
//]);
//TodoCollection.on("add",function(model){
//    console.log("Added"+model.get('title'));
//});
//TodoCollection.on("remove",function(model){
//    console.log("Removed"+model.get('title'));
//});
//TodoCollection.set([
//    {id:1,title:'go to Jamaica',completed:true},
//    {id:2,title:'go to China',completed:false},
//    {id:4,title:'go to Disney World',completed:false},
//
//]);
TodoCollection.on("reset",function(){
    console.log("Collection reset");
});
TodoCollection.add([
    {title:'Go to jamaica',completed:false},
    {title:'Go to china',completed:false},
    {title:'Go to disney',completed:true}
]);
console.log('Collection size:'+TodoCollection.length);
TodoCollection.reset([
    {title:'go to cuba.',completed:false}
])
console.log('Collection size:'+TodoCollection.length);
