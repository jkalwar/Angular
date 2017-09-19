define(['exports'] , function(e){
    function getValue(){
        return getValue2();
    }
    function getValue2(){
        return 'hello';
    }
    e.ab = getValue;
})