export default function handler(req, res) {
  const channels = [
{
    "name": "A2Z",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    "logo": "https://i.imgur.com/ftwsljN.png",
    "keyId": "f703e4c8ec9041eeb5028ab4248fa094",
    "key": "c22f2162e176eee6273a5d0b68d19530"
},
{
    "name": "ABC Australia",
    "url": "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    "logo": "https://i.imgur.com/SHwfqzO.png",
    "keyId": "389497f9f8584a57b234e27e430e04b7",
    "key": "3b85594c7f88604adf004e45c03511c0"
},
{
    "name": "Al Jazeera",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd",
    "logo": "https://i.imgur.com/52zEejy.png",
    "keyId": "7f3d900a04d84492b31fe9f79ac614e3",
    "key": "d33ff14f50beac42969385583294b8f2"
},
{
    "name": "Animal Planet",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    "logo": "https://i.imgur.com/SkpFpW4.png",
    "keyId": "436b69f987924fcbbc06d40a69c2799a",
    "key": "c63d5b0d7e52335b61aeba4f6537d54d"
},
{
    "name": "Animax",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd",
    "logo": "https://i.imgur.com/5gJTEHT.png",
    "keyId": "92032b0e41a543fb9830751273b8debd",
    "key": "03f8b65e2af785b10d6634735dbe6c11"
},
{
    "name": "Arirang",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd",
    "logo": "https://i.imgur.com/0n2Am4n.png",
    "keyId": "13815d0fa026441ea7662b0c9de00bcf",
    "key": "2d99a55743677c3879a068dd9c92f824"
},
{
    "name": "Asian Food Network",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
    "logo": "https://i.imgur.com/PUe61Ov.png",
    "keyId": "1619db30b9ed42019abb760a0a3b5e7f",
    "key": "5921e47fb290ae263291b851c0b4b6e4"
},
{
    "name": "AXN",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
    "logo": "https://i.imgur.com/OuaLV7f.png",
    "keyId": "fd5d928f5d974ca4983f6e9295dfe410",
    "key": "3aaa001ddc142fedbb9d5557be43792f"
},
{
    "name": "BBC Earth HD",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    "logo": "https://i.imgur.com/vip1JIz.png",
    "keyId": "34ce95b60c424e169619816c5181aded",
    "key": "0e2a2117d705613542618f58bf26fc8e"
},
{
    "name": "BBC Lifestyle",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd",
    "logo": "https://i.imgur.com/Tu3EwY9.png",
    "keyId": "34880f56627c11ee8c990242ac120002",
    "key": "c23677c829bb244b79a3dc09ffd88ca0"
},
{
    "name": "BBC News",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
    "logo": "https://i.imgur.com/CTf7nGs.png",
    "keyId": "f59650be475e4c34a844d4e2062f71f3",
    "key": "119639e849ddee96c4cec2f2b6b09b40"
},
{
    "name": "Bilyonaryo News Channel",
    "url": "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
    "logo": "https://i.imgur.com/FxHmXYU.png",
    "keyId": "227ffaf09bec4a889e0e0988704d52a2",
    "key": "b2d0dce5c486891997c1c92ddaca2cd2"
},
{
    "name": "Bloomberg",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
    "logo": "https://i.imgur.com/2WGEb3V.png",
    "keyId": "ef7d9dcfb99b406cb79fb9f675cba426",
    "key": "b24094f6ca136af25600e44df5987af4"
},
{
    "name": "Buko",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    "logo": "https://i.imgur.com/BxQvEil.png",
    "keyId": "d273c085f2ab4a248e7bfc375229007d",
    "key": "7932354c3a84f7fc1b80efa6bcea0615"
},
{
    "name": "Cartoon Network HD",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
    "logo": "https://i.imgur.com/FMGTxWc.png",
    "keyId": "a2d1f552ff9541558b3296b5a932136b",
    "key": "cdd48fa884dc0c3a3f85aeebca13d444"
},
{
    "name": "CCTV 4",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
    "logo": "https://i.imgur.com/TuwJPPz.png",
    "keyId": "b83566836c0d4216b7107bd7b8399366",
    "key": "32d50635bfd05fbf8189a0e3f6c8db09"
},
{
    "name": "CGTN Documentary",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",
    "logo": "https://i.imgur.com/UI9B475.png",
    "keyId": "0f854ee4412b11edb8780242ac120002",
    "key": "9f2c82a74e727deadbda389e18798d55"
},
{
    "name": "Cinemax HD",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    "logo": "https://i.imgur.com/9LNJXe3.png",
    "keyId": "b207c44332844523a3a3b0469e5652d7",
    "key": "fe71aea346db08f8c6fbf0592209f955"
},
{
    "name": "CNA",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",
    "logo": "https://i.imgur.com/NTGGEKz.png",
    "keyId": "b259df9987364dd3b778aa5d42cb9acd",
    "key": "753e3dba96ab467e468269e7e33fb813"
},
{
    "name": "CNN HD",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
    "logo": "https://i.imgur.com/fZ4MSUe.png",
    "keyId": "900c43f0e02742dd854148b7a75abbec",
    "key": "da315cca7f2902b4de23199718ed7e90"
},
{
    "name": "Crime & Investigation",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",
    "logo": "https://i.imgur.com/9QBOVGF.png",
    "keyId": "21e2843b561c4248b8ea487986a16d33",
    "key": "db6bb638ccdfc1ad1a3e98d728486801"
},
{
    "name": "DepEd TV",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd",
    "logo": "https://i.imgur.com/Ii7tRrE.png",
    "keyId": "0f853706412b11edb8780242ac120002",
    "key": "2157d6529d80a760f60a8b5350dbc4df"
},
{
    "name": "Discovery Channel SD",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",
    "logo": "https://i.imgur.com/XsvAk5H.png",
    "keyId": "d9ac48f5131641a789328257e778ad3a",
    "key": "b6e67c37239901980c6e37e0607ceee6"
},
{
    "name": "DreamWorks (Tagalized)",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
    "logo": "https://i.imgur.com/bzTr9Y2.png",
    "keyId": "564b3b1c781043c19242c66e348699c5",
    "key": "d3ad27d7fe1f14fb1a2cd5688549fbab"
},
{
    "name": "DreamWorks HD",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
    "logo": "https://i.imgur.com/bzTr9Y2.png",
    "keyId": "4ab9645a2a0a47edbd65e8479c2b9669",
    "key": "8cb209f1828431ce9b50b593d1f44079"
},
{
    "name": "Fashion TV HD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
    "logo": "https://i.imgur.com/lb9cHrS.png",
    "keyId": "971ebbe2d887476398e97c37e0c5c591",
    "key": "472aa631b1e671070a4bf198f43da0c7"
},
{
    "name": "Food Network HD",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
    "logo": "https://i.imgur.com/FZBze3z.png",
    "keyId": "b7299ea0af8945479cd2f287ee7d530e",
    "key": "b8ae7679cf18e7261303313b18ba7a14"
},
{
    "name": "France 24",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",
    "logo": "https://i.imgur.com/d8doNpe.png",
    "keyId": "257f9fdeb39d41bdb226c2ae1fbdaeb6",
    "key": "e80ead0f4f9d6038ab34f332713ceaa5"
},
{
    "name": "Global Trekker",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd",
    "logo": "https://i.imgur.com/EcY6bHc.png",
    "keyId": "4553f7e8011f411fb625cefc39274300",
    "key": "98f2f1d153367e84b5d559dc9dfb9a35"
},
{
    "name": "HBO Family HD",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
    "logo": "https://i.imgur.com/SefoKAw.png",
    "keyId": "872910c843294319800d85f9a0940607",
    "key": "f79fd895b79c590708cf5e8b5c6263be"
},
{
    "name": "HBO HD",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    "logo": "https://i.imgur.com/6uN52OW.png",
    "keyId": "d47ebabf7a21430b83a8c4b82d9ef6b1",
    "key": "54c213b2b5f885f1e0290ee4131d425b"
},
{
    "name": "HBO Hits HD",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    "logo": "https://i.imgur.com/tGSLZWz.png",
    "keyId": "b04ae8017b5b4601a5a0c9060f6d5b7d",
    "key": "a8795f3bdb8a4778b7e888ee484cc7a1"
},
{
    "name": "HBO Signature HD",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    "logo": "https://i.imgur.com/3L9QRDw.png",
    "keyId": "a06ca6c275744151895762e0346380f5",
    "key": "559da1b63eec77b5a942018f14d3f56f"
},
{
    "name": "HGTV HD",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
    "logo": "https://i.imgur.com/a6gRxAV.png",
    "keyId": "f0e3ab943318471abc8b47027f384f5a",
    "key": "13802a79b19cc3485d2257165a7ef62a"
},
{
    "name": "History HD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    "logo": "https://i.imgur.com/oJQJyhb.png",
    "keyId": "a7724b7ca2604c33bb2e963a0319968a",
    "key": "6f97e3e2eb2bade626e0281ec01d3675"
},
{
    "name": "Hits HD",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
    "logo": "https://i.imgur.com/CxqHKUO.png",
    "keyId": "dac605bc197e442c93f4f08595a95100",
    "key": "975e27ffc1b7949721ee3ccb4b7fd3e5"
},
{
    "name": "HITS Movies",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
    "logo": "https://i.imgur.com/xjyDTMr.png",
    "keyId": "f56b57b32d7e4b2cb21748c0b56761a7",
    "key": "3df06a89aa01b32655a77d93e09e266f"
},
{
    "name": "HITS Now",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd",
    "logo": "https://i.imgur.com/Ck0ad9b.png",
    "keyId": "14439a1b7afc4527bb0ebc51cf11cbc1",
    "key": "92b0287c7042f271b266cc11ab7541f1"
},
{
    "name": "IBC",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
    "logo": "https://i.imgur.com/CTHhr3Q.png",
    "keyId": "04e292bc99bd4ccba89e778651914254",
    "key": "ff0a62bdf8920ce453fe680330b563a5"
},
{
    "name": "KBS World SD",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd",
    "logo": "https://i.imgur.com/aFDRmtm.png",
    "keyId": "22ff2347107e4871aa423bea9c2bd363",
    "key": "c6e7ba2f48b3a3b8269e8bc360e60404"
},
{
    "name": "Kix HD",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    "logo": "https://i.imgur.com/GT8Y36M.png",
    "keyId": "a8d5712967cd495ca80fdc425bc61d6b",
    "key": "f248c29525ed4c40cc39baeee9634735"
},
{
    "name": "Knowledge Channel",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    "logo": "https://i.imgur.com/4O93eBO.png",
    "keyId": "0f856fa0412b11edb8780242ac120002",
    "key": "783374273ef97ad3bc992c1d63e091e7"
},
{
    "name": "Lifetime SD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",
    "logo": "https://i.imgur.com/ZyqbNXn.png",
    "keyId": "cf861d26e7834166807c324d57df5119",
    "key": "64a81e30f6e5b7547e3516bbf8c647d0"
},
{
    "name": "Lotus Macau",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
    "logo": "https://i.imgur.com/5G72qjx.png",
    "keyId": "60dc692e64ea443a8fb5ac186c865a9b",
    "key": "01bdbe22d59b2a4504b53adc2f606cc1"
},
{
    "name": "Moonbug Kids",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd",
    "logo": "https://i.imgur.com/ILaPSzA.png",
    "keyId": "0bf00921bec94a65a124fba1ef52b1cd",
    "key": "0f1488487cbe05e2badc3db53ae0f29f"
},
{
    "name": "MPTV",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
    "logo": "https://i.imgur.com/Ev9wen0.png",
    "keyId": "6aab8f40536f4ea98e7c97b8f3aa7d4e",
    "key": "139aa5a55ade471faaddacc4f4de8807"
},
{
    "name": "NBA TV Philippines (Cignal)",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd",
    "logo": "https://i.imgur.com/RcxNoIC.png",
    "keyId": "c5e51f41ceac48709d0bdcd9c13a4d88",
    "key": "20b91609967e472c27040716ef6a8b9a"
},
{
    "name": "NBA TV Philippines (Pilipinas Live)",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd",
    "logo": "https://i.imgur.com/OhFGSpi.png",
    "keyId": "f36eed9e95f140fabbc88a08abbeafff",
    "key": "0125600d0eb13359c28bdab4a2ebe75a"
},
{
    "name": "NHK World Japan",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",
    "logo": "https://i.imgur.com/SpJEnXg.png",
    "keyId": "3d6e9d4de7d7449aadd846b7a684e564",
    "key": "0800fff80980f47f7ac6bc60b361b0cf"
},
{
    "name": "Nick Jr",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd",
    "logo": "https://i.imgur.com/iIVYdZP.png",
    "keyId": "bab5c11178b646749fbae87962bf5113",
    "key": "0ac679aad3b9d619ac39ad634ec76bc8"
},
{
    "name": "Nickelodeon SD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd",
    "logo": "https://i.imgur.com/4o5dNZA.png",
    "keyId": "9ce58f37576b416381b6514a809bfd8b",
    "key": "f0fbb758cdeeaddfa3eae538856b4d72"
},
{
    "name": "One News HD",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    "logo": "https://i.imgur.com/25PG6TF.png",
    "keyId": "d39eb201ae494a0b98583df4d110e8dd",
    "key": "6797066880d344422abd3f5eda41f45f"
},
{
    "name": "One PH",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    "logo": "https://i.imgur.com/U9QwJSE.png",
    "keyId": "92834ab4a7e1499b90886c5d49220e46",
    "key": "a7108d9a6cfcc1b7939eb111daf09ab3"
},
{
    "name": "One Sports HD",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    "logo": "https://i.imgur.com/imI97L2.png",
    "keyId": "53c3bf2eba574f639aa21f2d4409ff11",
    "key": "3de28411cf08a64ea935b9578f6d0edd"
},
{
    "name": "One Sports+",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    "logo": "https://i.imgur.com/RnDeKOj.png",
    "keyId": "322d06e9326f4753a7ec0908030c13d8",
    "key": "1e3e0ca32d421fbfec86feced0efefda"
},
{
    "name": "PBA Rush HD",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    "logo": "https://i.imgur.com/Z7oMGiI.png",
    "keyId": "76dc29dd87a244aeab9e8b7c5da1e5f3",
    "key": "95b2f2ffd4e14073620506213b62ac82"
},
{
    "name": "PBO",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
    "logo": "https://i.imgur.com/r3PUF9p.png",
    "keyId": "dcbdaaa6662d4188bdf97f9f0ca5e830",
    "key": "31e752b441bd2972f2b98a4b1bc1c7a1"
},
{
    "name": "Premier Sports",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd",
    "logo": "https://i.imgur.com/GTfUEnU.png",
    "keyId": "fc19c98cb9504a0fb78b22fea0a4b814",
    "key": "ea683112a96d4ae6c32d4ea13923e8c7"
},
{
    "name": "Premier Sports 2",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
    "logo": "https://i.imgur.com/OWVR172.png",
    "keyId": "59454adb530b4e0784eae62735f9d850",
    "key": "61100d0b8c4dd13e4eb8b4851ba192cc"
},
{
    "name": "PTV 4",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    "logo": "https://i.imgur.com/jRvEV4E.png",
    "keyId": "71a130a851b9484bb47141c8966fb4a3",
    "key": "ad1f003b4f0b31b75ea4593844435600"
},
{
    "name": "Rock Entertainment",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    "logo": "https://i.imgur.com/BuKajCb.png",
    "keyId": "e4ee0cf8ca9746f99af402ca6eed8dc7",
    "key": "be2a096403346bc1d0bb0f812822bb62"
},
{
    "name": "Rock Action",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
    "logo": "https://i.imgur.com/T70dbrM.png",
    "keyId": "0f852fb8412b11edb8780242ac120002",
    "key": "4cbc004d8c444f9f996db42059ce8178"
},
{
    "name": "RPTV",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    "logo": "https://i.imgur.com/EbHOHer.png",
    "keyId": "1917f4caf2364e6d9b1507326a85ead6",
    "key": "a1340a251a5aa63a9b0ea5d9d7f67595"
},
{
    "name": "Sari-Sari",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    "logo": "https://i.imgur.com/25CGN9g.png",
    "keyId": "0a7ab3612f434335aa6e895016d8cd2d",
    "key": "b21654621230ae21714a5cab52daeb9d"
},
{
    "name": "SPOTV HD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    "logo": "https://i.imgur.com/QExPfsT.png",
    "keyId": "ec7ee27d83764e4b845c48cca31c8eef",
    "key": "9c0e4191203fccb0fde34ee29999129e"
},
{
    "name": "SPOTV 2 HD",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    "logo": "https://i.imgur.com/7mY1Zxg.png",
    "keyId": "7eea72d6075245a99ee3255603d58853",
    "key": "6848ef60575579bf4d415db1032153ed"
},
{
    "name": "Tagalized Movie Channel",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
    "logo": "https://i.imgur.com/550RYpJ.png",
    "keyId": "96701d297d1241e492d41c397631d857",
    "key": "ca2931211c1a261f082a3a2c4fd9f91b"
},
{
    "name": "Tap Action Flix HD",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
    "logo": "https://i.imgur.com/pjeTzag.png",
    "keyId": "bee1066160c0424696d9bf99ca0645e3",
    "key": "f5b72bf3b89b9848de5616f37de040b7"
},
{
    "name": "Tap Movies HD",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd",
    "logo": "https://i.imgur.com/lVNcCFq.png",
    "keyId": "71cbdf02b595468bb77398222e1ade09",
    "key": "c3f2aa420b8908ab8761571c01899460"
},
{
    "name": "Tap Sports",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
    "logo": "https://i.imgur.com/HWbSPI9.png",
    "keyId": "eabd2d95c89e42f2b0b0b40ce4179ea0",
    "key": "0e7e35a07e2c12822316c0dc4873903f"
},
{
    "name": "Tap TV",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd",
    "logo": "https://i.imgur.com/vDvLPda.png",
    "keyId": "f6804251e90b4966889b7df94fdc621e",
    "key": "55c3c014f2bd12d6bd62349658f24566"
},
{
    "name": "TechStorm",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd",
    "logo": "https://i.imgur.com/Iqhz6mI.png",
    "keyId": "5675d85ce6754ba6aa8f6acc4660f76f",
    "key": "140bfb365cf143c349f68699238a610c"
},
{
    "name": "Thrill SD",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
    "logo": "https://i.imgur.com/kgqsalZ.png",
    "keyId": "928114ffb2394d14b5585258f70ed183",
    "key": "a82edc340bc73447bac16cdfed0a4c62"
},
{
    "name": "Travel Channel SD",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    "logo": "https://i.imgur.com/8ukGHjv.png",
    "keyId": "f3047fc13d454dacb6db4207ee79d3d3",
    "key": "bdbd38748f51fc26932e96c9a2020839"
},
{
    "name": "True FM TV",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
    "logo": "https://i.imgur.com/i0xetYa.png",
    "keyId": "0559c95496d44fadb94105b9176c3579",
    "key": "40d8bb2a46ffd03540e0c6210ece57ce"
},
{
    "name": "TV Maria",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd",
    "logo": "https://i.imgur.com/3GGCstQ.png",
    "keyId": "fa3998b9a4de40659725ebc5151250d6",
    "key": "998f1294b122bbf1a96c1ddc0cbb229f"
},
{
    "name": "TV5 HD",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    "logo": "https://i.imgur.com/U5L67WD.png",
    "keyId": "2615129ef2c846a9bbd43a641c7303ef",
    "key": "07c7f996b1734ea288641a68e1cfdc4d"
},
{
    "name": "TV5 Monde",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",
    "logo": "https://i.imgur.com/aJkwXM4.png",
    "keyId": "fba5a720b4a541b286552899ba86e38b",
    "key": "f63fa50423148bfcbaa58c91dfcffd0e"
},
{
    "name": "tvN Movies Pinoy",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    "logo": "https://i.imgur.com/8YhI91e.png",
    "keyId": "2e53f8d8a5e94bca8f9a1e16ce67df33",
    "key": "3471b2464b5c7b033a03bb8307d9fa35"
},
{
    "name": "tvN Premium HD",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    "logo": "https://i.imgur.com/qEPJE1t.png",
    "keyId": "e1bde543e8a140b38d3f84ace746553e",
    "key": "b712c4ec307300043333a6899a402c10"
},
{
    "name": "TVUP",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    "logo": "https://i.imgur.com/OHLO5Hz.png",
    "keyId": "83e813ccd4ca4837afd611037af02f63",
    "key": "a97c515dbcb5dcbc432bbd09d15afd41"
},
{
    "name": "UAAP Varsity Channel",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    "logo": "https://i.imgur.com/POFK8tM.png",
    "keyId": "95588338ee37423e99358a6d431324b9",
    "key": "6e0f50a12f36599a55073868f814e81e"
},
{
    "name": "Viva Cinema",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
    "logo": "https://i.imgur.com/hBb2Fh9.png",
    "keyId": "07aa813bf2c147748046edd930f7736e",
    "key": "3bd6688b8b44e96201e753224adfc8fb"
},
{
    "name": "Warner TV HD",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    "logo": "https://i.imgur.com/JcTU3L6.png",
    "keyId": "4503cf86bca3494ab95a77ed913619a0",
    "key": "afc9c8f627fb3fb255dee8e3b0fe1d71"
},
{
    "name": "PL - SDI7",
    "url": "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/smart_sdi7.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "0f873c2c412b11edb8780242ac120002",
    "key": "9c1f27adc2a2dd23ce415e8563c07af6"
},
{
    "name": "PL - SDI8",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/smart_sdi8.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "50ea84d79773464192071d6fc058cba1",
    "key": "0b1642e0a661a780e74835fe765e1319"
},
{
    "name": "PL - SDI9",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/smart_sdi9.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "d2a24c65b3734565af71a1c3a9bbbf69",
    "key": "552351880bd0eb97f85c8aeccd88ffa5"
},
{
    "name": "PPV - SDI97",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/ppvsd197.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "8ad18258a9814d60a67efc6ec9fb3cbd",
    "key": "7ce6edd4bcf1510583c7739ac8f08e79"
},
{
    "name": "PILIPINAS LIVE EVENT 01",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi1.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "a913faeecaac4813a55240bea0c68858",
    "key": "05b7d7eaba8d6410dbe234336d9b235a"
},
{
    "name": "PILIPINAS LIVE EVENT 02",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_sdi2.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "2f3056cac18d4e31a59de39767042b03",
    "key": "83728946b898141ae411572f9f5fce0d"
},
{
    "name": "PILIPINAS LIVE EVENT 03",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/pl_sdi3.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "0c16d5962a22494db502b3453f891208",
    "key": "acaed175b981b34ae9b5cb0130506854"
},
{
    "name": "PILIPINAS LIVE EVENT 04",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/pl_sdi4.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "c3050cba95c945418efa3aedbc69cff7",
    "key": "988e7fade0828273472e24545d0cfa4c"
},
{
    "name": "PILIPINAS LIVE EVENT 05",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi5.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "eecc6d7ac3df439fb2b73fb38007cb82",
    "key": "826c341a6fef4518cefd27ec85e8b274"
},
{
    "name": "PILIPINAS LIVE EVENT 06",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi6.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "02d5f086706e407e9343c040ac7fb5b8",
    "key": "9d7e088bf7fffc9297ab3a02f0ce9a72"
},
{
    "name": "PILIPINAS LIVE EVENT 07",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pl_sdi7.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "40bed7f7948e4e5792982cf5b7ee4d78",
    "key": "1fbfd2e3be51aae857f2f24306e5fc41"
},
{
    "name": "PILIPINAS LIVE EVENT 08",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/pl_sdi8.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "5a8dbf3b9c2c43079a40fb5d0068f9ef",
    "key": "1778ac6e22527ee2efd6886d8d509c2d"
},
{
    "name": "PILIPINAS LIVE EVENT 09",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/pl_sdi9.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "1c7b9a2af9ad4076b155f06269b6adc2",
    "key": "ed6a8b11738cd27c0bee2d9e3fee178a"
},
{
    "name": "PILIPINAS LIVE EVENT 10",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/pl_sdi10.mpd",
    "logo": "https://pilipinaslive.com/assets/images/logo/pilipinaslive-logo-wbg.png",
    "keyId": "63055a8904644407a64a57874703f71e",
    "key": "0fd611777d37a7ff8afce19d9cee2e91"
},
{
    "name": "Smart SDI 5",
    "url": "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/smart_sdi5.mpd",
    "logo": "https://i.imgur.com/bVjfFxW.png",
    "keyId": "0a7b7dd5839a4e23be8f8058d6853069",
    "key": "6941cd2c3a559f3eed3cec560eff7b23"
},
{
    "name": "Smart SDI 6",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/smart_sdi6.mpd",
    "logo": "https://i.imgur.com/bVjfFxW.png",
    "keyId": "0f858648412b11edb8780242ac120002",
    "key": "9162cd7cee144bb4e717dbb6fe46567b"
},
{
    "name": "Smart SDI 7",
    "url": "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/smart_sdi7.mpd",
    "logo": "https://i.imgur.com/bVjfFxW.png",
    "keyId": "0f873c2c412b11edb8780242ac120002",
    "key": "9c1f27adc2a2dd23ce415e8563c07af6"
},
{
    "name": "Smart SDI 8",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/smart_sdi8.mpd",
    "logo": "https://i.imgur.com/bVjfFxW.png",
    "keyId": "50ea84d79773464192071d6fc058cba1",
    "key": "0b1642e0a661a780e74835fe765e1319"
},
{
    "name": "Smart SDI 9",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/smart_sdi9.mpd",
    "logo": "https://i.imgur.com/bVjfFxW.png",
    "keyId": "d2a24c65b3734565af71a1c3a9bbbf69",
    "key": "552351880bd0eb97f85c8aeccd88ffa5"
},
{
    "name": "Bein Sports 1",
    "url": "http://linearjitp-playback.astro.com.my/dash-wv/linear/408/default_ott.mpd",
    "logo": "https://logo.iptveditor.com/beinsports.png",
    "keyId": "1a655189ab5c49eb235308c2b1a9e710",
    "key": "3c4508af348844107f5e026a4fd6b16e"
},
{
    "name": "Bein Sports 2",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5066/default_ott.mpd",
    "logo": "https://logo.iptveditor.com/beinsports2.png",
    "keyId": "39c175581e237eff9559607eb9b23c10",
    "key": "5102b12aac7756c65dcb46a101d960d3"
},
{
    "name": "Bein Sports 3",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2705/default_ott.mpd",
    "logo": "https://logo.iptveditor.com/beinsports3.png",
    "keyId": "20c884ef8ed26b2762f8b1a78f2d1910",
    "key": "042a21bf236ca729b1e343ed6e0a6337"
},
{
    "name": "DMAX",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2610/default_ott.mpd",
    "logo": "https://i.imgur.com/C6BZ3mk.png",
    "keyId": "0e21da304a29298ceca1fdfd1e71e210",
    "key": "87de38cf3ed2bbcd5d89b63e571bfe21"
},
{
    "name": "Sky News",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2102/default_ott.mpd",
    "logo": "https://i.imgur.com/8p0dh0V.png",
    "keyId": "4bef7fc1bcb6bd7f287def940e38cb10",
    "key": "b0dadd74b713e4b29fd27e147cae7133"
},
{
    "name": "iQIYI",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/1006/default_ott.mpd",
    "logo": "https://i.imgur.com/E63wJx9.png",
    "keyId": "7ef7e913ce85a1131b27036069169a10",
    "key": "77d98ed71db7524c27875a09a975f9e6"
},
{
    "name": "Crime + Investigation",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd",
    "logo": "https://i.imgur.com/pzFuuoC.png",
    "keyId": "22fc5baf47ae3b6322bc244206bbb210",
    "key": "db1ee2b8994b91aac65049ef3e493787"
},
{
    "name": "ABC Australia",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5075/default_ott.mpd",
    "logo": "https://i.imgur.com/40K2Qu3.png",
    "keyId": "6a9fcc2f94258cee0f2108687c42e710",
    "key": "99bd7c1ff2391244b4e40e08bef1109d"
},
{
    "name": "Animal Planet",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2710/default_ott.mpd",
    "logo": "https://i.imgur.com/zRbq9e5.png",
    "keyId": "d5199f1513a0286e038dae8f7d820010",
    "key": "4d4d4d9dc41be43f528a4940cf66f14c"
},
{
    "name": "Al Jazeera",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd",
    "logo": "https://i.imgur.com/pJajEzm.png",
    "keyId": "b1fbd0874e7923f5b05929a042aa0610",
    "key": "6c3c498113abffdf454dc935319a794d"
},
{
    "name": "Asian Food Network",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/500/default_ott.mpd",
    "logo": "https://i.imgur.com/54WAoTO.png",
    "keyId": "346b9f41e2933748c8861f82932e0110",
    "key": "cf0cffb637b81598a27bd6b0d90d65a8"
},
{
    "name": "Astro Arena",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2604/default_ott.mpd",
    "logo": "https://i.imgur.com/RMkf2pO.png",
    "keyId": "efda647dad723563b625be8c05ee6110",
    "key": "6776985938b332164b97b81fe566a34a"
},
{
    "name": "Astro Boo",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2407/default_ott.mpd",
    "logo": "https://i.imgur.com/L3GlH0I.png",
    "keyId": "ea4d51ade01bbf3946e0de973051ba10",
    "key": "f3266bec607f25879f48640f30f1c888"
},
{
    "name": "Astro Football",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default_ott.mpd",
    "logo": "https://i.imgur.com/TjX1ovr.png",
    "keyId": "79f4028730acca9ab8b00f26158ddb10",
    "key": "91febe843c08c7cc523efd827292e40e"
},
{
    "name": "Astro Premier",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5128/default_ott.mpd",
    "logo": "https://i.imgur.com/0SmOU2Y.png",
    "keyId": "2f3238142348789ed5a99b9a1bd8e010",
    "key": "438fb62e97278526686d921126343d32"
},
{
    "name": "Astro Showcase",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_ott.mpd",
    "logo": "https://i.imgur.com/M1W8rYc.png",
    "keyId": "b8090c8361cc5cc5c1aac0ec2710de10",
    "key": "ca0d18538845bae2cb4f4a168036f174"
},
{
    "name": "AXN",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd",
    "logo": "https://i.imgur.com/tDbuoAU.png",
    "keyId": "c24a7811d9ab46b48b746a0e7e269210",
    "key": "c321afe1689b07d5b7e55bd025c483ce"
},
{
    "name": "BBC Earth",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5051/default_ott.mpd",
    "logo": "https://i.imgur.com/RHI6oEh.png",
    "keyId": "dbf62ff0804bc5b8d523ef009d786310",
    "key": "bb1bdb27cc5fe1ec637d257999344cc3"
},
{
    "name": "BBC Lifestyle",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5050/default_ott.mpd",
    "logo": "http://linear-poster.astro.com.my/prod/logo/BBC_Lifestyle.png",
    "keyId": "f429292dc744f284355308561577ac10",
    "key": "b12e1f894129c517dc8845baaeebec8a"
},
{
    "name": "BBC News",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/1008/default_ott.mpd",
    "logo": "https://i.imgur.com/hTscg8e.png",
    "keyId": "01767d1c2315c0e9556f477fb1f0c710",
    "key": "77ec0eeb21c07812fd7c58628366ccb3"
},
{
    "name": "Bloomberg TV",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5020/default_ott.mpd",
    "logo": "https://i.imgur.com/La3o9MU.png",
    "keyId": "db1343545ae25ddecf8dfa4422f35410",
    "key": "79a044b30d64f5c37e6d45d503cbb280"
},
{
    "name": "W-Sport",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_ott.mpd",
    "logo": "https://i.imgur.com/CIBoLmB.png",
    "keyId": "010cbb9cf1a01ead38070730d38bc710",
    "key": "9cd5c0d1e54c22e035d88dd3c1dfc84c"
},
{
    "name": "CCTV 4",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/403/default_ott.mpd",
    "logo": "https://i.imgur.com/HBisPOA.png",
    "keyId": "db1a338f71d40186f5997cb085bb3f10",
    "key": "8425690c4844fbb01b5eae706bc2f7c6"
},
{
    "name": "Eurosport",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2100/default_ott.mpd",
    "logo": "https://i.imgur.com/XdZyAtM.png",
    "keyId": "4db23a41babfe9afc222a58c59828310",
    "key": "d0e794e3cff564ed2c720a098eb177c7"
},
{
    "name": "France 24",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/9985/default_ott.mpd",
    "logo": "https://i.imgur.com/BGQ38xe.png",
    "keyId": "3b0c1cebd0c4518d600f52c354ed1910",
    "key": "76d409ffc4eaa012c61d8c31bd13df5d"
},
{
    "name": "CNN International",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2503/default_ott.mpd",
    "logo": "https://i.imgur.com/WyzkAHR.png",
    "keyId": "1b618a291cece44c9845dddfc4fd9b10",
    "key": "bf7e1b97555c4acb7455f711b2a9ff16"
},
{
    "name": "Cartoon Network",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/509/default_ott.mpd",
    "logo": "https://i.imgur.com/8mfFj4h.png",
    "keyId": "1a05bebf706408431a390c3f9f40f410",
    "key": "89c5ff9f8e65c7fe966afbd2f9128e5f"
},
{
    "name": "Celestial Classic Movies",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/100/default_ott.mpd",
    "logo": "https://i.imgur.com/4JCkzjl.png",
    "keyId": "a642dd4bf3ea782e19202adefb604b10",
    "key": "3f59355e15eed1bb219ea1687d55cfbb"
},
{
    "name": "Cinemax",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/603/default_ott.mpd",
    "logo": "https://i.imgur.com/YomkvVa.png",
    "keyId": "efdb2a8d39151cc39f4b51d762cf9c10",
    "key": "13cc535ad4a73201147863cac386cdd3"
},
{
    "name": "Cinema One",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-cinemaone-dash-abscbnono/3df156e6-f826-4ee9-86d4-41dcefa2a8d7/index.mpd",
    "logo": "https://i.imgur.com/hJ6MBiA.png",
    "keyId": "58d0e56991194043b8fb82feb4db7276",
    "key": "d68f41b59649676788889e19fb10d22c"
},
{
    "name": "Cinemo! iwant",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-cinemo-dash-abscbnono/6f83e359-8454-497c-9018-01e0571d6789/index.mpd",
    "logo": "https://i.imgur.com/Pf8CNau.png",
    "keyId": "aa8aebe35ccc4541b7ce6292efcb1bfb",
    "key": "aab1df109d22fc5d7e3ec121ddf24e5f"
},
{
    "name": "GMA Pinoy TV",
    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd",
    "logo": "https://upload.wikimedia.org/wikipedia/en/a/af/GMA_Pinoy_TV_logo.png",
    "keyId": "c95ed4c44b0b4f7fa1c6ebbbbaab21a1",
    "key": "47635b8e885e19f2ccbdff078c207058"
},
{
    "name": "History 2",
    "url": "https://cdn.cvattv.com.ar/live/c6eds/History_2/SA_Live_dash_enc/History_2.mpd?|origin=https://portal.app.flow.com.ar",
    "logo": "https://i.imgur.com/XCkPHYC.png",
    "keyId": "ecbe97ec34784304b390a12ba3854ccf",
    "key": "5a0ee36ed9b8920cb19546fd92f2d415"
},
{
    "name": "Golf Channel",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/1003/default_ott.mpd",
    "logo": "https://i.imgur.com/gfFaRwH.png",
    "keyId": "705bab5e645b6d7c95588b29520f8110",
    "key": "28639bcfb5cbee8ff9ca398fcf5bfcd0"
},
{
    "name": "K-Plus",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd",
    "logo": "https://i.imgur.com/iomniFU.png",
    "keyId": "aa48b28bd723f91214887df6ed9fad10",
    "key": "b5a3a800848120c843ae0fa68c09c261"
},
{
    "name": "Movies Now",
    "url": "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    "logo": "https://i.imgur.com/3BCg3pS.png",
    "keyId": "40f019b86241d23ef075633fd7f1e927",
    "key": "058dec845bd340178a388edd104a015e"
},
{
    "name": "MTV Live ast",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5014/default_ott.mpd",
    "logo": "https://i.imgur.com/j8x0nhs.png",
    "keyId": "3ac2542a4f7be746633db07647451710",
    "key": "22f964a6d6927ccdba482e775cdff190"
},
{
    "name": "Premier League",
    "url": "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd",
    "logo": "https://i.imgur.com/dAPtBTh.png",
    "keyId": "002046c9a49b9ab1cdb6616bec5d26c3",
    "key": "d2f92f6b7edc9a1a05d393ba0c20ef9e"
},
{
    "name": "Studio Universal",
    "url": "https://fta1-cdn-flr.visionplus.id/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd",
    "logo": "https://i.imgur.com/jaGqbyh.png",
    "keyId": "b4a7b3289eff493d8700becf2e2a1157",
    "key": "bfbcfcb8137dd565a7f4b5ce7800c1f0"
},
{
    "name": "TFC",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/e14fe6d2-d899-4d38-aa61-2701b04a4153/index.mpd",
    "logo": "https://i.imgur.com/BbrAmpY.png",
    "keyId": "9568cc84e1d944f38eac304517eab6fd",
    "key": "f12142af8f39b3bab79d3679d3665ebe"
},
{
    "name": "Zee Cinema",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5106/default_ott.mpd",
    "logo": "https://i.imgur.com/Qy1Mcoc.png",
    "keyId": "db96483900762e233aa7830457a0d310",
    "key": "20f392e5a1021be68fc32bcdb9ec3ad4"
},
{
    "name": "ESPN",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/v8rFtMbz/espn.png",
    "keyId": "0f85a4e1fc5937a827313597d04f8e27",
    "key": "cc1d8219be0130da85e4c4ce73a75abb"
},
{
    "name": "ESPN 2",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_2_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/mksxWpNC/espn2-logo-white.png",
    "keyId": "8d7cb8fbc81cf3eddf8ebb5db5e11282",
    "key": "b7a98812ab8d8974649a6ec420c013e1"
},
{
    "name": "ESPN 3",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_3_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/1t6xT16y/ESPN3.png",
    "keyId": "eb04e4ec7049c0712e09c57aea9c1cb7",
    "key": "404636ec78dfaf363333805c9a2c3f66"
},
{
    "name": "ESPN 4",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_PLUS_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/BvR9Mnjh/ESPN_Extra_new.png",
    "keyId": "1edee1ef683e9518a172af824b07642a",
    "key": "39371baca096e3c1c896e55bab88b564"
},
{
    "name": "ESPN 5",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(FOX_SPORTS_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/pdJDJ3xS/espn5.png",
    "keyId": "4509cc12887f5d8402cc9c0025ecdd52",
    "key": "2344766901410ed6306e445a9c43249e"
},
{
    "name": "ESPN 6",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(FOX_SPORTS3_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/DfL7phRm/espn6.png",
    "keyId": "859a7ef7e969a0ae9584005a8b642fd6",
    "key": "a90ca0de14cc1ea2305bb26ce18d2abe"
},
{
    "name": "ESPN 7",
    "url": "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(FOX_SPORTS2_HD)/manifest.mpd?|referer=https://covoslivechannels2dash.clarovideo.com/",
    "logo": "https://i.postimg.cc/gJ0GB6FW/espn7.png",
    "keyId": "49020ffc8b5cc542c469370c40000565",
    "key": "8ea4292586d4df3ab4ef173453f6c555"
}
  ];

  res.status(200).json(channels);
}
