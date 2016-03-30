var personalCenter = api.require('personalCenter');
alert(personalCenter);
personalCenter.open({
        imgPath: 'widget://res/personalCenter1.png',
        placeholderImg: 'widget://res/personalCenter.png',
        btnArray: [{
            bgImg: 'widget://res/personal_btn_nor.png',
            selectedImg: 'widget://res/personal_btn_sele.png'
        }, {
           bgImg: 'widget://res/personal_btn_nor.png',
           selectedImg: 'widget://res/personal_btn_sele.png'
        }, {
            bgImg: 'widget://res/personal_btn_nor.png',
            selectedImg: 'widget://res/personal_btn_sele.png'
        }]
},function( ret, err ){
    if( ret ){
         alert( JSON.stringify( ret ) );
    }else{
         alert( JSON.stringify( err ) );
    }
});
