function getAryThisWeek(date){
    const dateToday=new Date();
    let dateIncrement=new Date(dateToday);
    const aryThisWeek=[];
    for(var i=0;i<7;i++){
	aryThisWeek[i]=new Date(new Date(dateIncrement).setHours(0, 0, 0, 0));
	dateIncrement=new Date(dateIncrement.setDate(dateIncrement.getDate()+1));
    }
    return aryThisWeek;
}
module.exports={
    getAryThisWeek
};
