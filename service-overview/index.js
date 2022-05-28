require('dotenv').config();
const Axios=require('axios');
const Debug=require('debug')('debug');

const URL=process.env.URL;
Debug('URL: '+URL)

run().catch(err => {
    Debug('run: error')
    console.log(err)
});

async function run() {
    Debug('run started...')
    const res = await Axios.get(URL);
    Debug('res: '+res);
    if('data'in res){
	Debug('data available');
	const obj=res.data;
	const len=Object.keys(obj).length;
	Debug('len:'+len);
	Object.entries(obj).forEach((obj,key)=>{
	    Debug('agency:'+obj[0]+', route count:'+Object.keys(obj[1]).length);
	});
    }else{
	Debug('data NOT available');
    }
    Debug('run done.')
}
