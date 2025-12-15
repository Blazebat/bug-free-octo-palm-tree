// Example channel list
const channels = [
    {
        "name": "Rage Music TV",
        "url": "https://live20.bozztv.com/giatv/giatv-ragemusictv/ragemusictv/playlist.m3u8",
        "logo": "https://i.imgur.com/a3iXI35.png",
    },
    {
        "name": "Rage TV",
        "url": "https://live20.bozztv.com/giatv/giatv-ragetv/ragetv/playlist.m3u8",
        "logo": "https://i.imgur.com/DTF7Aa0.png",
    },
    {
        "name": "SineManila",
        "url": "https://live20.bozztv.com/giatv/giatv-sinemanila/sinemanila/playlist.m3u8",
        "logo": "https://i.imgur.com/bizGo39.png",
    },
    {
        "name": "Bihm TV",
        "url": "https://live20.bozztv.com/giatv/giatv-bihmtv/bihmtv/playlist.m3u8",
        "logo": "https://i.imgur.com/F8YMePt.png",
    },
    {
        "name": "aniemeX",
        "url": "https://live20.bozztv.com/giatv/giatv-animex/animex/playlist.m3u8",
        "logo": "https://i.imgur.com/0FLu8iV.png",
    },
    {
        "name": "Kapamilya Channel",
        "url": "https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
        "logo": "https://pql-static.abs-cbn.com/iwanttfc/output/channels/kapchalive/images/kapchalive_livethumb_600x600_v1.jpg",
        "keyId": "bd17afb5dc9648a39be79ee3634dd4b8",
        "key": "3ecf305d54a7729299b93a3d69c02ea5"
    },
    {
        "name": "GMA Pinoy TV",
        "url": "https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd",
        "logo": "https://pql-static.abs-cbn.com/images/live/GMAPTVNA_LIVETHUMB_600X600_V1.jpg",
        "keyId": "c95ed4c44b0b4f7fa1c6ebbbbaab21a1",
        "key": "47635b8e885e19f2ccbdff078c207058"
    },
    {
    "name": "New K Movies",
    "url": "https://dbrb49pjoymg4.cloudfront.net/10001/99991386/hls/master.m3u8?includeAssetTags=true&ads.xumo_channelId=99991386",
    "logo": "https://static.wixstatic.com/media/fbfe8c_b357f895b90640d28cdb614832824145~mv2.png/v1/fill/w_382,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kmovie%20logo%20%EB%B3%B5%EC%82%AC.png"
    },
    {
        "name": "NBA on Prime",
        "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/2jbycgm3g3/out/v1/066dd9325648468c9ecdc8b272370931/cenc.mpd",
        "logo": "https://i.imgur.com/6Ehca8Q.jpeg",
        "keyId": "84077d18bcf234a42de3745be106a87f",
        "key": "aee3069c062ec8ee6bfdd32985f287ef"
    },
    {
        "name": "NFL Network",
        "url": "https://ac-009.live.p7s1video.net/e0e064c8/t_004/ran-nflnetwork-de-hd/cenc-default.mpd",
        "logo": "https://i.postimg.cc/xdnppLvX/NFL.png",
        "keyId": "b26a662a10074eb0756404c8e90e765a",
        "key": "76e376bd25f92bed939435d982f92d3f"
    },   
    {
        "name": "Team Philippines",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pp_ch1_pri/default/index.mpd",
        "logo": "https://qp-pldtcms-image-resizer-cloud-prod.akamaized.net/image/45F31D3C-B6C3-43BE-9FCA-DCE3AFD8B3F5/0-16x9.jpg?width=240",
        "keyId": "0f873dc6412b11edb8780242ac120002",
        "key": "7511efa4f5f1f82fe61776ba3b49fc10"
    },
    {
        "name": "Team Sports",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pp_ch2_pri/default/index.mpd",
        "logo": "https://qp-pldtcms-image-resizer-cloud-prod.akamaized.net/image/92391F2D-EAF3-4705-A2B2-BB8C516E8B89/0-16x9.jpg?width=240",
        "keyId": "4fef00332d7e4fbc8f7005dfbf851a59",
        "key": "a6368c181358f3e527411a6c452c6a1a"
    },    
    {
        "name": "Pilipinas Live 1",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi1/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "27059dc8b75841e7a511e67d5e069ae2",
        "key": "b7217f85cb0a1dd7113ed307c363d0df"
    },
    {
        "name": "Pilipinas Live 2",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pl_sdi2/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "2f3056cac18d4e31a59de39767042b03",
        "key": "83728946b898141ae411572f9f5fce0d"
    },
    {
        "name": "Pilipinas Live 3",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pl_sdi3/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "0c16d5962a22494db502b3453f891208",
        "key": "acaed175b981b34ae9b5cb0130506854"
    },
    {
        "name": "Pilipinas Live 4",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi4/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "c3050cba95c945418efa3aedbc69cff7",
        "key": "988e7fade0828273472e24545d0cfa4c"
    },
    {
        "name": "Pilipinas Live 5",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi5/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "eecc6d7ac3df439fb2b73fb38007cb82",
        "key": "826c341a6fef4518cefd27ec85e8b274"
    },
    {
        "name": "Pilipinas Live 6",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pl_sdi6/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "02d5f086706e407e9343c040ac7fb5b8",
        "key": "9d7e088bf7fffc9297ab3a02f0ce9a72"
    },
    {
        "name": "Pilipinas Live 7",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/pl_sdi7/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "40bed7f7948e4e5792982cf5b7ee4d78",
        "key": "1fbfd2e3be51aae857f2f24306e5fc41"
    },
    {
        "name": "Pilipinas Live 8",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi8/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "5a8dbf3b9c2c43079a40fb5d0068f9ef",
        "key": "1778ac6e22527ee2efd6886d8d509c2d"
    },
    {
        "name": "Pilipinas Live 9",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi9/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "1c7b9a2af9ad4076b155f06269b6adc2",
        "key": "ed6a8b11738cd27c0bee2d9e3fee178a"
    },
    {
        "name": "Pilipinas Live 10",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pl_sdi10/default/index.mpd",
        "logo": "https://i.imgur.com/FlT7LFR.png",
        "keyId": "63055a8904644407a64a57874703f71e",
        "key": "0fd611777d37a7ff8afce19d9cee2e91"
    },
    {
        "name": "One PH",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A9392-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1800",
        "keyId": "92834ab4a7e1499b90886c5d49220e46",
        "key": "a7108d9a6cfcc1b7939eb111daf09ab3"
    },
    {
        "name": "Buko",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AD956-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "d273c085f2ab4a248e7bfc375229007d",
        "key": "7932354c3a84f7fc1b80efa6bcea0615"
    },
    {
        "name": "Sari-Sari",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ADE4C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "0a7ab3612f434335aa6e895016d8cd2d",
        "key": "b21654621230ae21714a5cab52daeb9d"
    },
    {
        "name": "PTV",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5F08-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "71a130a851b9484bb47141c8966fb4a3",
        "key": "ad1f003b4f0b31b75ea4593844435600"
    },
    {
        "name": "TV5",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A97A2-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "2615129ef2c846a9bbd43a641c7303ef",
        "key": "07c7f996b1734ea288641a68e1cfdc4d"
    },
    {
        "name": "DepEd Channel",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/depedch_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A9590-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1920",
        "keyId": "0f853706412b11edb8780242ac120002",
        "key": "2157d6529d80a760f60a8b5350dbc4df"
    },
    {
        "name": "One News",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7DDA-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "d39eb201ae494a0b98583df4d110e8dd",
        "key": "6797066880d344422abd3f5eda41f45f"
    },
    {
        "name": "RPTV",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/44B03994-C303-4ACE-997C-91CAC493D0FC/0-16x9.jpg?width=1980",
        "keyId": "1917f4caf2364e6d9b1507326a85ead6",
        "key": "a1340a251a5aa63a9b0ea5d9d7f67595"
    },
    {
        "name": "IBC 13",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/ibc13_sd_new/default1/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ABC0A-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "16ecd238c0394592b8d3559c06b1faf5",
        "key": "05b47ae3be1368912ebe28f87480fc84"
    },
    {
        "name": "TrueTV",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/4514F052-94DC-47C5-8BB1-DA42BD5F2F57/0-16x9.jpg?width=1990",
        "keyId": "0559c95496d44fadb94105b9176c3579",
        "key": "40d8bb2a46ffd03540e0c6210ece57ce"
    },
    {
        "name": "A2Z",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5580-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f703e4c8ec9041eeb5028ab4248fa094",
        "key": "c22f2162e176eee6273a5d0b68d19530"
    },
    {
        "name": "Bilyonaryo Channel",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/166677E4-33C5-4C3B-A09D-7B3442D99E77/0-16x9.jpg?width=1980",
        "keyId": "227ffaf09bec4a889e0e0988704d52a2",
        "key": "b2d0dce5c486891997c1c92ddaca2cd2"
    },
    {
        "name": "TVN Movies Pinoy",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/C5298B63-6A6F-4CEC-8AC7-07B482EFA587/0-16x9.jpg?width=1980",
        "keyId": "2e53f8d8a5e94bca8f9a1e16ce67df33",
        "key": "3471b2464b5c7b033a03bb8307d9fa35"
    },
    {
        "name": "PBO",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A8AAA-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "dcbdaaa6662d4188bdf97f9f0ca5e830",
        "key": "31e752b441bd2972f2b98a4b1bc1c7a1"
    },
    {
        "name": "Viva Cinema",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AA120-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "07aa813bf2c147748046edd930f7736e",
        "key": "3bd6688b8b44e96201e753224adfc8fb"
    },
    {
        "name": "TMC (Tagalized Movie Channel)",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/A9E09C52-721F-4316-ABB9-35EF145B69C0/0-16x9.jpg?width=1980",
        "keyId": "96701d297d1241e492d41c397631d857",
        "key": "ca2931211c1a261f082a3a2c4fd9f91b"
    },
    {
        "name": "Celestial Movies Pinoy",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
        "logo": "https://cms.cignal.tv/Upload/Images/Celestial-Logo-2022.jpg",
        "keyId": "0f8537d8412b11edb8780242ac120002",
        "key": "2ffd7230416150fd5196fd7ea71c36f3"
    },
    {
        "name": "Thrill",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd",
        "logo": "https://i.imgur.com/2vImVJE.png",
        "keyId": "928114ffb2394d14b5585258f70ed183",
        "key": "a82edc340bc73447bac16cdfed0a4c62"
    },
    {
        "name": "Tap Movies",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC48E-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "71cbdf02b595468bb77398222e1ade09",
        "key": "c3f2aa420b8908ab8761571c01899460"
    },
    {
        "name": "HBO",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/B741DD7A-A7F8-4F8A-A549-9EF411020F9D/0-16x9.jpg?width=1980",
        "keyId": "d47ebabf7a21430b83a8c4b82d9ef6b1",
        "key": "54c213b2b5f885f1e0290ee4131d425b"
    },
    {
        "name": "HBO Hits",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/CEE83EE5-D870-4B3C-9339-ACA7FF4020D0/0-16x9.jpg?width=1980",
        "keyId": "b04ae8017b5b4601a5a0c9060f6d5b7d",
        "key": "a8795f3bdb8a4778b7e888ee484cc7a1"
    },
    {
        "name": "HBO Family",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/62F1A4ED-EB56-49DF-912D-0A2388131772/0-16x9.jpg?width=1980",
        "keyId": "872910c843294319800d85f9a0940607",
        "key": "f79fd895b79c590708cf5e8b5c6263be"
    },
    {
        "name": "HBO Signature",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/D5127959-34E4-41B2-AA80-CE74DDC2C3C4/0-16x9.jpg?width=1980",
        "keyId": "a06ca6c275744151895762e0346380f5",
        "key": "559da1b63eec77b5a942018f14d3f56f"
    },
    {
        "name": "HITS Movies",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_hitsmovies/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ACF06-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f56b57b32d7e4b2cb21748c0b56761a7",
        "key": "3df06a89aa01b32655a77d93e09e266f"
    },
    {
        "name": "Tap Action Flix",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tapactionflix_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC790-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "bee1066160c0424696d9bf99ca0645e3",
        "key": "f5b72bf3b89b9848de5616f37de040b7"
    },
    {
        "name": "Cinemax",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/BC3C51E7-F1A5-46DE-979D-65DC483AE59C/0-16x9.jpg?width=1980",
        "keyId": "b207c44332844523a3a3b0469e5652d7",
        "key": "fe71aea346db08f8c6fbf0592209f955"
    },
    {
        "name": "NBA TV  Philippines",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/3327FF64-3E52-42DE-B516-4629BFABA8C7/0-16x9.jpg?width=1980",
        "keyId": "c5e51f41ceac48709d0bdcd9c13a4d88",
        "key": "20b91609967e472c27040716ef6a8b9a"
    },
    {
        "name": "PBA Rush",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7650-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "76dc29dd87a244aeab9e8b7c5da1e5f3",
        "key": "95b2f2ffd4e14073620506213b62ac82"
    },
    {
        "name": "One Sports HD Cignal",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AB750-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "53c3bf2eba574f639aa21f2d4409ff11",
        "key": "3de28411cf08a64ea935b9578f6d0edd"
    },
    {
        "name": "One Sports Plus",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A696C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "322d06e9326f4753a7ec0908030c13d8",
        "key": "1e3e0ca32d421fbfec86feced0efefda"
    },
    {
        "name": "UAAP Varsity Channel",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A869A-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "6e0f50a12f36599a55073868f814e81e"
    },
    {
        "name": "TAP Sports",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapsports/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6624-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "eabd2d95c89e42f2b0b0b40ce4179ea0",
        "key": "0e7e35a07e2c12822316c0dc4873903f"
    },
    {
        "name": "Premier Sports",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6228-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "b8b595299fdf41c1a3481fddeb0b55e4",
        "key": "cd2b4ad0eb286239a4a022e6ca5fd007"
    },
    {
        "name": "Premier Sports 2",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A899C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "59454adb530b4e0784eae62735f9d850",
        "key": "61100d0b8c4dd13e4eb8b4851ba192cc"
    },
    {
        "name": "SpoTV HD",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5BC0-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "ec7ee27d83764e4b845c48cca31c8eef",
        "key": "9c0e4191203fccb0fde34ee29999129e"
    },
    {
        "name": "SpoTV 2 HD",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6A70-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "7eea72d6075245a99ee3255603d58853",
        "key": "6848ef60575579bf4d415db1032153ed"
    },
    {
        "name": "Knowledge Channel",
        "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ADA5A-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1000",
        "keyId": "0f856fa0412b11edb8780242ac120002",
        "key": "783374273ef97ad3bc992c1d63e091e7"
    },
    {
        "name": "Animax",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ABB06-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "92032b0e41a543fb9830751273b8debd",
        "key": "03f8b65e2af785b10d6634735dbe6c11"
    },
    {
        "name": "DreamWorks HD",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5698-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "4ab9645a2a0a47edbd65e8479c2b9669",
        "key": "8cb209f1828431ce9b50b593d1f44079"
    },
    {
        "name": "Dreamworks Tagalog",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/40E328E7-FE69-4287-86EA-FA942A7EA302/0-16x9.jpg?width=1980",
        "keyId": "564b3b1c781043c19242c66e348699c5",
        "key": "d3ad27d7fe1f14fb1a2cd5688549fbab"
    },
    {
        "name": "Moonbug Kids",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC696-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "0bf00921bec94a65a124fba1ef52b1cd",
        "key": "0f1488487cbe05e2badc3db53ae0f29f"
    },
    {
        "name": "Nickelodeon",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ADD5C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "9ce58f37576b416381b6514a809bfd8b",
        "key": "f0fbb758cdeeaddfa3eae538856b4d72"
    },
    {
        "name": "Cartoon Network (Cignal)",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A51FC-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "a2d1f552ff9541558b3296b5a932136b",
        "key": "cdd48fa884dc0c3a3f85aeebca13d444"
    },
    {
        "name": "Nick Jr.",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AB8E0-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=180",
        "keyId": "bab5c11178b646749fbae87962bf5113",
        "key": "0ac679aad3b9d619ac39ad634ec76bc8"
    },
    {
        "name": "Warner TV",
        "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ABA02-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "4503cf86bca3494ab95a77ed913619a0",
        "key": "afc9c8f627fb3fb255dee8e3b0fe1d71"
    },
    {
        "name": "TVN Premium",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/66B5278C-75EA-4D93-AD2B-A5822A0F1056/0-16x9.jpg?width=1980",
        "keyId": "e1bde543e8a140b38d3f84ace746553e",
        "key": "b712c4ec307300043333a6899a402c10"
    },
    {
        "name": "KBS World",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kbsworld/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7CE0-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "22ff2347107e4871aa423bea9c2bd363",
        "key": "c6e7ba2f48b3a3b8269e8bc360e60404"
    },
    {
        "name": "AXN",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC36C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "fd5d928f5d974ca4983f6e9295dfe410",
        "key": "3aaa001ddc142fedbb9d5557be43792f"
    },
    {
        "name": "Hits HD",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A8BB8-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "dac605bc197e442c93f4f08595a95100",
        "key": "975e27ffc1b7949721ee3ccb4b7fd3e5"
    },
    {
        "name": "Hits Now",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/68C2D95A-A2A4-4C2B-93BE-41893C61210C/0-16x9.jpg?width=1980",
        "keyId": "14439a1b7afc4527bb0ebc51cf11cbc1",
        "key": "92b0287c7042f271b266cc11ab7541f1"
    },
    {
        "name": "Lifetime",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_lifetime/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A80E6-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "cf861d26e7834166807c324d57df5119",
        "key": "64a81e30f6e5b7547e3516bbf8c647d0"
    },
    {
        "name": "Tap TV",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC592-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f6804251e90b4966889b7df94fdc621e",
        "key": "55c3c014f2bd12d6bd62349658f24566"
    },
    {
        "name": "Tap Edge",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
        "logo": "https://cms.cignal.tv/Upload/Images/Tap-Edge.jpg",
        "keyId": "4553f7e8011f411fb625cefc39274300",
        "key": "98f2f1d153367e84b5d559dc9dfb9a35"
    },
    {
        "name": "Rock Action",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6520-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "0f852fb8412b11edb8780242ac120002",
        "key": "4cbc004d8c444f9f996db42059ce8178"
    },
    {
        "name": "Rock Entertainment",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6C78-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1920",
        "keyId": "e4ee0cf8ca9746f99af402ca6eed8dc7",
        "key": "be2a096403346bc1d0bb0f812822bb62"
    },
    {
        "name": "Asian Food Network (Cignal)",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AB020-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "1619db30b9ed42019abb760a0a3b5e7f",
        "key": "5921e47fb290ae263291b851c0b4b6e4"
    },
    {
        "name": "Food Network",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_foodnetwork_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A9496-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "b7299ea0af8945479cd2f287ee7d530e",
        "key": "b8ae7679cf18e7261303313b18ba7a14"
    },
    {
        "name": "HGTV",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A858C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f0e3ab943318471abc8b47027f384f5a",
        "key": "13802a79b19cc3485d2257165a7ef62a"
    },
    {
        "name": "Fashion TV",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A9D06-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "971ebbe2d887476398e97c37e0c5c591",
        "key": "472aa631b1e671070a4bf198f43da0c7"
    },
    {
        "name": "History HD",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A9C02-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "a7724b7ca2604c33bb2e963a0319968a",
        "key": "6f97e3e2eb2bade626e0281ec01d3675"
    },
    {
        "name": "Discovery Channel",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/discovery/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A734E-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "d9ac48f5131641a789328257e778ad3a",
        "key": "b6e67c37239901980c6e37e0607ceee6"
    },
    {
        "name": "Animal Planet",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A57B0-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "436b69f987924fcbbc06d40a69c2799a",
        "key": "c63d5b0d7e52335b61aeba4f6537d54d"
    },
    {
        "name": "Travel Channel",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/travel_channel_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A8898-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f3047fc13d454dacb6db4207ee79d3d3",
        "key": "bdbd38748f51fc26932e96c9a2020839"
    },
    {
        "name": "BBC Earth",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_bbcearth_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6868-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "34ce95b60c424e169619816c5181aded",
        "key": "0e2a2117d705613542618f58bf26fc8e"
    },
    {
        "name": "CNN International",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cnnhd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5468-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "900c43f0e02742dd854148b7a75abbec",
        "key": "da315cca7f2902b4de23199718ed7e90"
    },
    {
        "name": "BBC World News",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/bbcworld_news_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A847E-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "f59650be475e4c34a844d4e2062f71f3",
        "key": "119639e849ddee96c4cec2f2b6b09b40"
    },
    {
        "name": "Bloomberg",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bloomberg_sd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AA47C-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "ef7d9dcfb99b406cb79fb9f675cba426",
        "key": "b24094f6ca136af25600e44df5987af4"
    },
    {
        "name": "ABC Australia",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/abc_aus/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ACCD6-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "389497f9f8584a57b234e27e430e04b7",
        "key": "3b85594c7f88604adf004e45c03511c0"
    },
    {
        "name": "CCTV-4",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_cctv4/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7448-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "b83566836c0d4216b7107bd7b8399366",
        "key": "32d50635bfd05fbf8189a0e3f6c8db09"
    },
    {
        "name": "France 24",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/france24/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55AC9B6-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "257f9fdeb39d41bdb226c2ae1fbdaeb6",
        "key": "e80ead0f4f9d6038ab34f332713ceaa5"
    },
    {
        "name": "CGTN Documentary",
        "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgtn/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ABD18-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "0f854ee4412b11edb8780242ac120002",
        "key": "9f2c82a74e727deadbda389e18798d55"
    },
    {
        "name": "CGTN",
        "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cgtneng.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/DEFC81EE-883B-446F-BD47-21F5B7FE0730/0-16x9.jpg?width=1980",
        "keyId": "2782770c21354914922efa9dbc82b513",
        "key": "cc65d298482da51046b0c0656f3f5f15"
    },
    {
        "name": "TV5 Monde",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tv5_monde/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ADB5E-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "fba5a720b4a541b286552899ba86e38b",
        "key": "f63fa50423148bfcbaa58c91dfcffd0e"
    },
    {
        "name": "Lotus Macau",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/C6AB65CE-37A0-4040-ABA7-021C669DBEE1/0-16x9.jpg?width=1980",
        "keyId": "60dc692e64ea443a8fb5ac186c865a9b",
        "key": "01bdbe22d59b2a4504b53adc2f606cc1"
    },
    {
        "name": "KIX HD",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kix_hd1/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7EE8-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
        "keyId": "a8d5712967cd495ca80fdc425bc61d6b",
        "key": "f248c29525ed4c40cc39baeee9634735"
    },
    {
        "name": "tvUP",
        "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
        "logo": "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/C0B38DBD-BE4F-4044-9D85-D827D8DC64C4/0-16x9.jpg?width=1980",
        "keyId": "83e813ccd4ca4837afd611037af02f63",
        "key": "a97c515dbcb5dcbc432bbd09d15afd41"
    }
];

let player;

document.addEventListener("DOMContentLoaded", async () => {
  const video = document.getElementById("videoPlayer");
  const channelGrid = document.getElementById("channelGrid");
  const togglePanel = document.getElementById("togglePanel");
  const searchBar = document.getElementById("searchBar");

  shaka.polyfill.installAll();

  if (!shaka.Player.isBrowserSupported()) {
    console.error("Browser not supported!");
    return;
  }

  player = new shaka.Player(video);

  player.addEventListener("error", e =>
    console.error("Shaka error", e.detail)
  );

  function renderChannels(filter = "") {
    channelGrid.innerHTML = "";
    channels
      .filter(ch => ch.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(ch => {
        const div = document.createElement("div");
        div.className = "channel-card";
        div.innerHTML = `
          <img src="${ch.logo}" alt="${ch.name}" />
          <span>${ch.name}</span>
        `;
        div.addEventListener("click", () => loadChannel(ch));
        channelGrid.appendChild(div);
      });
  }

  async function loadChannel(channel) {
    try {
      // Reset DRM
      player.configure({ drm: { clearKeys: {} } });

      // Apply ClearKey if present
      if (channel.keyId && channel.key) {
        player.configure({
          drm: {
            clearKeys: {
              [channel.keyId.toLowerCase()]: channel.key.toLowerCase()
            }
          }
        });
      }

      await player.load(channel.url);
      console.log(`Loaded: ${channel.name}`);
    } catch (err) {
      console.error("Error loading channel:", err);
    }
  }

  togglePanel.addEventListener("click", () => {
    channelGrid.classList.toggle("hidden");
  });

  searchBar.addEventListener("input", e => {
    renderChannels(e.target.value);
  });

  renderChannels();

  if (channels.length > 0) {
    loadChannel(channels[0]);
  }
});
