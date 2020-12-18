var express = require('express');
var app = express();
var axios = require('axios');

app.use(express.static('./'))

app.get('/offers/:id',(req,res)=>{
      axios.get('https://arabclicks.api.hasoffers.com/Apiv3/json?api_key=80367cdcf1809a07a3e0b57ed948af3dea2334c4d22854916cd7398b537c726e&Target=Affiliate_Offer&Method=findById&contain[]=TrackingLink&id='+req.params.id)
      .then(response=>{
           res.send({data:response.data.response.data});
      })
})

app.get('/offers',(req,res)=>{
    axios.get('https://arabclicks.api.hasoffers.com/Apiv3/json?api_key=80367cdcf1809a07a3e0b57ed948af3dea2334c4d22854916cd7398b537c726e&Target=Affiliate_Offer&Method=findAll&contain[]=TrackingLink')
    .then(response=>{
         res.send({data:response.data.response.data});
    })
})

app.get('/deeplink/:id',(req,res)=>{
    if(req.query.url){
     axios.get('https://arabclicks.api.hasoffers.com/Apiv3/json?api_key=80367cdcf1809a07a3e0b57ed948af3dea2334c4d22854916cd7398b537c726e&Target=Affiliate_Offer&Method=generateTrackingLink&offer_id='+req.params.id+'&params[url]='+req.query.url)
      .then(response=>{
          res.send({data:response.data.response.data});
       })
       } else
        {
          axios.get('https://arabclicks.api.hasoffers.com/Apiv3/json?api_key=80367cdcf1809a07a3e0b57ed948af3dea2334c4d22854916cd7398b537c726e&Target=Affiliate_Offer&Method=generateTrackingLink&offer_id='+req.params.id)
          .then(response=>{
         res.send({data:response.data.response.data});
         })
        }
})

app.listen(3013,()=>{
     console.log('running');
})
