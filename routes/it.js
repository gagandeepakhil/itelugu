const express = require('express');
const itcontrol = require('../controller/control');
const router = express.Router();

const re=[
   'డా.కె.రత్నశేఖర్',
   'ఆచార్య వెలుదండ నిత్యానంద రావు',
   'డా. కట్టేపోగు రత్న శేఖర్',
   'డా. తారాపట్ల సత్యనారాయణ',
   'డా. డి.‌వి. సూర్యారావు',
   'డా. మరడాన సుబ్బారావు',
   'డా. దేవులపల్లి పద్మజ',
   'డా. బూసి వెంకట స్వామి',
   'డా.పి.రాజేశ్వర రావు',
   'డా.జే‌కే కిశోర్',
   'ఆచార్య కప్పగంతుల శ్రీనివాస్',
   'డా.బి.సూర్యనారాయణ',
   'డా.భైరవభట్ల విజయాదిత్య',
   'ఆచార్య జీ. యోహన్ బాబు',
   'శ్రీ సూర్యప్రకాశ రావు గారు',
   'శ్రీ ఏ‌వి‌వి ప్రసాద్',
   'శ్రీ బి ఆర్ ప్రసాద్',
   'శ్రీ రాజులపాటి శివయ్య',
   'శ్రీమతి ఇంద్రాణి',
   'డా. పెండ్యాల లావణ్య',
   'డా. గుమ్మా సాంబశివరావు',
   'డా. మూర్తి రేమెళ్ళ',
   'డా. ఆకెళ్ళ విభీషణ శర్మ',
   'ఆచార్య కసిరెడ్డి వెంకటరెడ్డి',
   'శ్రీ ఎల్ గిరీష్ కుమార్',
   'ఆచార్య జర్రా అప్పారావు',
   'ఆర్. కుసుమ కుమారి',
   'డా. శ్రీహరి సాహు',
   'శ్రీ టి‌వి రామకృష్ణ',
   'శ్రీ ఎన్‌కే బాబు',
   'డా.మంజులూరి కృష్ణకుమారి',
   'డా. అన్నంశెట్టి ఈశ్వరమ్మ',
   'డా. గోపాలనాయుడు',
   'డా. ఎస్.పోలయ్య',
   'డా. పేర్లి దాసు',
   'డా. డిల్లీశ్వర రావు',
   'డా. రాధమ్మ',
   'ఆతుకూరి వెంకటేశ్వర్లు (యోగి)',
   'డా. ప్రవీణ',
   'డా. కృష్ణవేణి',
   'డా. పి. మాసిలామణి',
   'డా. మోకా ప్రతాపు',
   'ఆచార్య అయ్యగారి సీతారత్నం',
   'డా. జి‌. మాలతి',
   'డా. పులపర్తి శ్రీనివాసరావు',
   'శ్రీ కోష్టు గోవిందరావు',
   'శ్రీ మొండి స్వామి',
   'డా. పి.దాసు',
   'శ్రీ సి. మనోహర నాయుడు',
   'శ్రీసున్నపురాళ్ళ షణ్ముఖ',
   'శ్రీ ఇందురమణ',
   'శ్రీ వి.వి. రమణమూర్తి ',
   'శ్రేమతి గునపర్తి ఆదిలక్ష్మి',
   'శ్రీ షేక్ బడే సాహెబ్',
   'శ్రీ ఆనంద్ కూచిభొట్ల',
   'శ్రీ సంజీవ నరసింహ అప్పడు',
   'డా. శారదాపూర్ణ శొంఠి',
   'డా. శ్రీదేవీ శ్రీకాంత్',
   'శ్రీ మల్లిక్ పుచ్చా ',
   'శ్రీ కె. మల్లికేశ్వర రావు',
   'ఆచార్య వెలమల సిమ్మన్న',
   'డా. ఆర్.రామకృష్ణ శాస్త్రి',
   'డా. నేమాని శారద',
   'డా. డేనియల్ నేజర్స్',
   'డా. కొంపెల్ల శర్మ',
   'డా. జె.రామ నరసింహం' ,
   'డా. ఎస్. అనూరాధ',
   'డా. పి‌.కె. జయలక్ష్మీ',
   'శ్రీ కుప్పిశెట్టి కుశరావు'

]

router.get("/resource",function(req,res){
   res.render('resource',{re:re})
})
router.get("/success",function(req,res){
   res.render('success',{})
})
router.get("/2025",function(req,res){
   res.render('itelugu2025',{})
})
router.get("/2023",function(req,res){
   res.render('itelugu2023',{})
})
router.get("/2024",function(req,res){
   res.render('itelugu2024',{})
})
router.get("/",function(req,res){
   res.render('index',{})
})
router.post("/",itcontrol.send_details) 


module.exports=router;