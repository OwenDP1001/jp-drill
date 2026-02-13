import { useState, useEffect, useRef } from "react";

const CHUNKS = [
  { name: 'Chunk 1', range: 'ああ → くせ', words: [
    {j:'ああ',e:'like that (far)',k:'ああ'},
    {j:'あい',e:'love',k:'愛'},
    {j:'あう',e:'to meet',k:'会う'},
    {j:'あお',e:'blue',k:'青'},
    {j:'あか',e:'red',k:'赤'},
    {j:'あき',e:'autumn',k:'秋'},
    {j:'あく',e:'to open (intransitive)',k:'開く'},
    {j:'あさ',e:'morning',k:'朝'},
    {j:'あし',e:'leg/foot',k:'足/脚'},
    {j:'あじ',e:'taste',k:'味'},
    {j:'あせ',e:'sweat',k:'汗'},
    {j:'あと',e:'after/later',k:'後'},
    {j:'あな',e:'hole',k:'穴'},
    {j:'あに',e:'older brother (own)',k:'兄'},
    {j:'あね',e:'older sister (own)',k:'姉'},
    {j:'あみ',e:'knitting/net',k:'網/編み'},
    {j:'あめ',e:'rain/candy',k:'雨/飴'},
    {j:'あり',e:'ant',k:'蟻'},
    {j:'ある',e:'to exist (things)',k:'ある'},
    {j:'いい',e:'good',k:'良い'},
    {j:'いう',e:'to say',k:'言う'},
    {j:'いえ',e:'house',k:'家'},
    {j:'いか',e:'squid',k:'烏賊'},
    {j:'いき',e:'breath/spirit',k:'息/粋'},
    {j:'いく',e:'to go',k:'行く'},
    {j:'いし',e:'stone/rock',k:'石'},
    {j:'いす',e:'chair',k:'椅子'},
    {j:'いち',e:'one',k:'一'},
    {j:'いつ',e:'when',k:'何時'},
    {j:'いと',e:'thread',k:'糸'},
    {j:'いぬ',e:'dog',k:'犬'},
    {j:'いま',e:'now/living room',k:'今/居間'},
    {j:'いみ',e:'meaning',k:'意味'},
    {j:'いも',e:'potato',k:'芋'},
    {j:'いや',e:'no/unpleasant',k:'嫌'},
    {j:'いる',e:'to exist (living)',k:'いる'},
    {j:'いろ',e:'color',k:'色'},
    {j:'いわ',e:'rock',k:'岩'},
    {j:'うえ',e:'above/top',k:'上'},
    {j:'うし',e:'cow',k:'牛'},
    {j:'うそ',e:'lie',k:'嘘'},
    {j:'うた',e:'song',k:'歌'},
    {j:'うたう',e:'to sing',k:'歌う'},
    {j:'うち',e:'house/home',k:'家/内'},
    {j:'うつ',e:'to hit',k:'打つ'},
    {j:'うで',e:'arm',k:'腕'},
    {j:'うま',e:'horse',k:'馬'},
    {j:'うみ',e:'sea/ocean',k:'海'},
    {j:'うめ',e:'plum',k:'梅'},
    {j:'うる',e:'to sell',k:'売る'},
    {j:'うん',e:'yeah/uh-huh',k:'うん'},
    {j:'え',e:'picture',k:'絵'},
    {j:'えき',e:'station',k:'駅'},
    {j:'えび',e:'shrimp',k:'海老'},
    {j:'えり',e:'collar',k:'襟'},
    {j:'おか',e:'hill',k:'丘'},
    {j:'おく',e:'hundred million',k:'億'},
    {j:'おじ',e:'uncle',k:'叔父'},
    {j:'おす',e:'to push',k:'押す'},
    {j:'おと',e:'sound',k:'音'},
    {j:'おどる',e:'to dance',k:'踊る'},
    {j:'おば',e:'aunt',k:'叔母'},
    {j:'おび',e:'belt/sash',k:'帯'},
    {j:'おや',e:'parent',k:'親'},
    {j:'おり',e:'folding (origami)',k:'折り'},
    {j:'かい',e:'times (counter)',k:'回'},
    {j:'かう',e:'to buy',k:'買う'},
    {j:'かお',e:'face',k:'顔'},
    {j:'かぎ',e:'key',k:'鍵'},
    {j:'かく',e:'to write',k:'書く'},
    {j:'かげ',e:'shadow',k:'影'},
    {j:'かさ',e:'umbrella',k:'傘'},
    {j:'かす',e:'to lend',k:'貸す'},
    {j:'かず',e:'number',k:'数'},
    {j:'かぜ',e:'wind/cold',k:'風/風邪'},
    {j:'かた',e:'shoulder',k:'肩'},
    {j:'かち',e:'value/win',k:'価値/勝ち'},
    {j:'かつ',e:'to win',k:'勝つ'},
    {j:'かど',e:'corner',k:'角'},
    {j:'かに',e:'crab',k:'蟹'},
    {j:'かね',e:'money/bell',k:'金/鉦'},
    {j:'かべ',e:'wall',k:'壁'},
    {j:'かみ',e:'paper/hair/god',k:'紙/髪/神'},
    {j:'かむ',e:'to bite',k:'噛む'},
    {j:'かめ',e:'turtle',k:'亀'},
    {j:'かも',e:'duck',k:'鴨'},
    {j:'から',e:'from/empty',k:'から/空'},
    {j:'かれ',e:'he',k:'彼'},
    {j:'かわ',e:'river',k:'川'},
    {j:'がく',e:'learning',k:'学'},
    {j:'きく',e:'to listen/chrysanthemum',k:'聞く/菊'},
    {j:'きし',e:'shore/knight',k:'岸/騎士'},
    {j:'きす',e:'kiss',k:'キス'},
    {j:'きず',e:'wound',k:'傷'},
    {j:'きた',e:'north',k:'北'},
    {j:'きぬ',e:'silk',k:'絹'},
    {j:'きみ',e:'you (familiar)',k:'君'},
    {j:'きり',e:'fog',k:'霧'},
    {j:'きる',e:'to cut',k:'切る'},
    {j:'きん',e:'gold',k:'金'},
    {j:'ぎむ',e:'duty/obligation',k:'義務'},
    {j:'ぎり',e:'obligation',k:'義理'},
    {j:'ぎん',e:'silver',k:'銀'},
    {j:'くう',e:'to eat (rough)',k:'食う'},
    {j:'くさ',e:'grass',k:'草'},
    {j:'くせ',e:'habit/quirk',k:'癖'},
  ]},
  { name: 'Chunk 2', range: 'くち → つめ', words: [
    {j:'くち',e:'mouth',k:'口'},
    {j:'くつ',e:'shoes',k:'靴'},
    {j:'くに',e:'country',k:'国'},
    {j:'くび',e:'neck/firing',k:'首'},
    {j:'くま',e:'bear',k:'熊'},
    {j:'くみ',e:'class/group',k:'組'},
    {j:'くも',e:'cloud/spider',k:'雲/蜘蛛'},
    {j:'くり',e:'chestnut',k:'栗'},
    {j:'くる',e:'to come',k:'来る'},
    {j:'くろ',e:'black',k:'黒'},
    {j:'ぐち',e:'complaint',k:'愚痴'},
    {j:'けが',e:'injury',k:'怪我'},
    {j:'けさ',e:'this morning',k:'今朝'},
    {j:'けす',e:'to turn off/erase',k:'消す'},
    {j:'けど',e:'but/however',k:'けど'},
    {j:'けん',e:'prefecture/ticket',k:'県/券'},
    {j:'げた',e:'wooden sandals',k:'下駄'},
    {j:'げり',e:'diarrhea',k:'下痢'},
    {j:'こい',e:'love/carp',k:'恋/鯉'},
    {j:'こう',e:'like this',k:'こう'},
    {j:'こえ',e:'voice',k:'声'},
    {j:'ここ',e:'here',k:'ここ'},
    {j:'こし',e:'waist/hip',k:'腰'},
    {j:'こと',e:'matter/thing',k:'事'},
    {j:'こめ',e:'uncooked rice',k:'米'},
    {j:'これ',e:'this',k:'これ'},
    {j:'ごと',e:'each/every',k:'毎'},
    {j:'ごま',e:'sesame',k:'胡麻'},
    {j:'ごみ',e:'trash/garbage',k:'ゴミ'},
    {j:'さい',e:'age/-years-old',k:'歳'},
    {j:'さき',e:'ahead/future',k:'先'},
    {j:'さけ',e:'sake/alcohol',k:'酒'},
    {j:'さば',e:'mackerel',k:'鯖'},
    {j:'さむ',e:'cold',k:'寒'},
    {j:'さめ',e:'shark',k:'鮫'},
    {j:'さら',e:'plate/furthermore',k:'皿/更'},
    {j:'さる',e:'monkey',k:'猿'},
    {j:'さん',e:'three',k:'三'},
    {j:'しお',e:'salt',k:'塩'},
    {j:'しか',e:'deer',k:'鹿'},
    {j:'しき',e:'ceremony/style',k:'式'},
    {j:'した',e:'below/tongue',k:'下/舌'},
    {j:'しな',e:'goods/quality',k:'品'},
    {j:'しぬ',e:'to die',k:'死ぬ'},
    {j:'しま',e:'island',k:'島'},
    {j:'しも',e:'frost',k:'霜'},
    {j:'しり',e:'butt/ass',k:'尻'},
    {j:'しる',e:'to know',k:'知る'},
    {j:'しろ',e:'white',k:'白'},
    {j:'じき',e:'soon/directly',k:'直'},
    {j:'じこ',e:'accident',k:'事故'},
    {j:'すう',e:'to suck',k:'吸う'},
    {j:'すえ',e:'end/future',k:'末'},
    {j:'すき',e:'like/love',k:'好き'},
    {j:'すぐ',e:'right away/soon',k:'直ぐ'},
    {j:'すし',e:'sushi',k:'寿司'},
    {j:'すそ',e:'hem',k:'裾'},
    {j:'すな',e:'sand',k:'砂'},
    {j:'すみ',e:'corner/charcoal',k:'隅/炭'},
    {j:'すむ',e:'to live/reside',k:'住む'},
    {j:'する',e:'to do',k:'する'},
    {j:'せ',e:'height/back',k:'背'},
    {j:'せい',e:'nature/spirit',k:'性/精'},
    {j:'せき',e:'cough/seat',k:'咳/席'},
    {j:'せつ',e:'theory/occasion',k:'説/節'},
    {j:'せな',e:'back (body)',k:'背中'},
    {j:'せみ',e:'cicada',k:'蝉'},
    {j:'せん',e:'line',k:'線'},
    {j:'ぜひ',e:'by all means',k:'是非'},
    {j:'そう',e:'like that',k:'そう'},
    {j:'そく',e:'rule/pair',k:'則/足'},
    {j:'そこ',e:'there/bottom',k:'底/そこ'},
    {j:'そで',e:'sleeve',k:'袖'},
    {j:'そと',e:'outside',k:'外'},
    {j:'そば',e:'beside/soba',k:'側/蕎麦'},
    {j:'そら',e:'sky',k:'空'},
    {j:'それ',e:'that thing',k:'それ'},
    {j:'ぞう',e:'elephant',k:'象'},
    {j:'たい',e:'sea bream',k:'鯛'},
    {j:'たか',e:'hawk',k:'鷹'},
    {j:'たけ',e:'bamboo',k:'竹'},
    {j:'たこ',e:'octopus/kite',k:'蛸/凧'},
    {j:'ただ',e:'free/only',k:'只'},
    {j:'たつ',e:'to stand',k:'立つ'},
    {j:'たな',e:'shelf',k:'棚'},
    {j:'たね',e:'seed',k:'種'},
    {j:'たび',e:'trip/journey',k:'旅'},
    {j:'ため',e:'for/benefit',k:'為'},
    {j:'だい',e:'stand/generation',k:'台/代'},
    {j:'だく',e:'to embrace',k:'抱く'},
    {j:'だけ',e:'just/only',k:'だけ'},
    {j:'だれ',e:'who',k:'誰'},
    {j:'ちか',e:'underground',k:'地下'},
    {j:'ちず',e:'map',k:'地図'},
    {j:'ちち',e:'father',k:'父'},
    {j:'ちゃ',e:'tea',k:'茶'},
    {j:'ちゅ',e:'middle',k:'中'},
    {j:'って',e:'quotation marker',k:'って'},
    {j:'つい',e:'accidentally',k:'つい'},
    {j:'つき',e:'moon/month',k:'月'},
    {j:'つぎ',e:'next',k:'次'},
    {j:'つく',e:'to arrive/turn on',k:'着く/付く'},
    {j:'つち',e:'soil/earth',k:'土'},
    {j:'つま',e:'wife',k:'妻'},
    {j:'つむ',e:'to pile up',k:'積む'},
    {j:'つめ',e:'nail/claw',k:'爪'},
  ]},
  { name: 'Chunk 3', range: 'つゆ → ふむ', words: [
    {j:'つゆ',e:'rainy season/dew',k:'梅雨/露'},
    {j:'つり',e:'fishing',k:'釣り'},
    {j:'つる',e:'crane',k:'鶴'},
    {j:'て',e:'hand',k:'手'},
    {j:'てき',e:'enemy',k:'敵'},
    {j:'てつ',e:'iron',k:'鉄'},
    {j:'てら',e:'temple',k:'寺'},
    {j:'てん',e:'point/shop',k:'点/店'},
    {j:'です',e:'be (copula formal)',k:'です'},
    {j:'でる',e:'to leave/exit',k:'出る'},
    {j:'とう',e:'tower/party',k:'塔/党'},
    {j:'とか',e:'things like',k:'とか'},
    {j:'とき',e:'time/when',k:'時'},
    {j:'とげ',e:'thorn',k:'棘'},
    {j:'とこ',e:'bed/place',k:'床'},
    {j:'とし',e:'year',k:'年'},
    {j:'とぶ',e:'to fly/jump',k:'飛ぶ'},
    {j:'とら',e:'tiger',k:'虎'},
    {j:'とり',e:'bird',k:'鳥'},
    {j:'とる',e:'to take',k:'取る'},
    {j:'どう',e:'how/copper',k:'どう/銅'},
    {j:'どこ',e:'where',k:'何処'},
    {j:'どじ',e:'blunder/clumsy',k:'ドジ'},
    {j:'どれ',e:'which one',k:'どれ'},
    {j:'どろ',e:'mud',k:'泥'},
    {j:'ない',e:'not exist/not there',k:'無い'},
    {j:'なか',e:'middle/relationship',k:'中/仲'},
    {j:'なく',e:'to cry',k:'泣く'},
    {j:'なし',e:'pear',k:'梨'},
    {j:'なす',e:'eggplant',k:'茄子'},
    {j:'なぜ',e:'why',k:'何故'},
    {j:'なつ',e:'summer',k:'夏'},
    {j:'など',e:'etc./and so on',k:'等'},
    {j:'なな',e:'seven',k:'七'},
    {j:'なに',e:'what',k:'何'},
    {j:'なべ',e:'pot',k:'鍋'},
    {j:'なみ',e:'wave',k:'波'},
    {j:'なら',e:'if/in case of',k:'なら'},
    {j:'なる',e:'to become',k:'なる'},
    {j:'なわ',e:'rope',k:'縄'},
    {j:'なん',e:'what/how many',k:'何'},
    {j:'にく',e:'meat',k:'肉'},
    {j:'にし',e:'west',k:'西'},
    {j:'にじ',e:'rainbow',k:'虹'},
    {j:'にち',e:'day',k:'日'},
    {j:'にる',e:'to boil/simmer',k:'煮る'},
    {j:'にわ',e:'garden',k:'庭'},
    {j:'ぬい',e:'sewing',k:'縫い'},
    {j:'ぬく',e:'to pull out',k:'抜く'},
    {j:'ぬぐ',e:'to undress',k:'脱ぐ'},
    {j:'ぬし',e:'master/owner',k:'主'},
    {j:'ぬの',e:'cloth',k:'布'},
    {j:'ぬま',e:'swamp',k:'沼'},
    {j:'ぬれ',e:'wet',k:'濡れ'},
    {j:'ねぎ',e:'green onion',k:'葱'},
    {j:'ねこ',e:'cat',k:'猫'},
    {j:'ねじ',e:'screw',k:'螺子'},
    {j:'ねつ',e:'fever',k:'熱'},
    {j:'ねる',e:'to sleep',k:'寝る'},
    {j:'ねん',e:'year',k:'年'},
    {j:'のち',e:'later/after',k:'後'},
    {j:'ので',e:'because/since',k:'ので'},
    {j:'のど',e:'throat',k:'喉'},
    {j:'のむ',e:'to drink',k:'飲む'},
    {j:'のり',e:'seaweed/glue',k:'海苔/糊'},
    {j:'のる',e:'to ride',k:'乗る'},
    {j:'は',e:'tooth',k:'歯'},
    {j:'はい',e:'ash/gray',k:'灰'},
    {j:'はく',e:'to wear (bottom)',k:'履く'},
    {j:'はこ',e:'box',k:'箱'},
    {j:'はし',e:'bridge/chopsticks',k:'橋/箸'},
    {j:'はず',e:'should be',k:'筈'},
    {j:'はだ',e:'skin',k:'肌'},
    {j:'はち',e:'eight',k:'八'},
    {j:'はと',e:'pigeon/dove',k:'鳩'},
    {j:'はな',e:'flower/nose',k:'花/鼻'},
    {j:'はは',e:'mother',k:'母'},
    {j:'はら',e:'belly',k:'腹'},
    {j:'はり',e:'needle',k:'針'},
    {j:'はる',e:'spring',k:'春'},
    {j:'はれ',e:'clear weather',k:'晴れ'},
    {j:'はん',e:'half',k:'半'},
    {j:'ばい',e:'double',k:'倍'},
    {j:'ばか',e:'idiot/fool',k:'馬鹿'},
    {j:'ばら',e:'rose',k:'薔薇'},
    {j:'ばん',e:'evening',k:'晩'},
    {j:'ひく',e:'to pull/play',k:'引く'},
    {j:'ひげ',e:'beard',k:'髭'},
    {j:'ひざ',e:'knee',k:'膝'},
    {j:'ひと',e:'person',k:'人'},
    {j:'ひに',e:'daily',k:'日に'},
    {j:'ひび',e:'crack/daily',k:'罅/日々'},
    {j:'ひま',e:'free time',k:'暇'},
    {j:'ひも',e:'string',k:'紐'},
    {j:'ひる',e:'daytime/noon',k:'昼'},
    {j:'ひん',e:'goods/elegance',k:'品'},
    {j:'びん',e:'bottle/jar',k:'瓶'},
    {j:'ふう',e:'manner/wind',k:'風'},
    {j:'ふく',e:'fortune/clothes',k:'福/服'},
    {j:'ふぐ',e:'pufferfish',k:'河豚'},
    {j:'ふた',e:'lid/two (counter)',k:'蓋'},
    {j:'ふち',e:'edge/rim',k:'縁'},
    {j:'ふで',e:'brush',k:'筆'},
    {j:'ふと',e:'suddenly',k:'ふと'},
    {j:'ふね',e:'ship/boat',k:'船'},
    {j:'ふむ',e:'to step on',k:'踏む'},
  ]},
  { name: 'Chunk 4', range: 'ふゆ → パン', words: [
    {j:'ふゆ',e:'winter',k:'冬'},
    {j:'ふる',e:'to fall (rain)',k:'降る'},
    {j:'ふろ',e:'bath',k:'風呂'},
    {j:'ぶた',e:'pig',k:'豚'},
    {j:'へそ',e:'navel',k:'臍'},
    {j:'へび',e:'snake',k:'蛇'},
    {j:'へや',e:'room',k:'部屋'},
    {j:'へん',e:'strange',k:'変'},
    {j:'べつ',e:'separate/different',k:'別'},
    {j:'べん',e:'convenience',k:'便'},
    {j:'ぺん',e:'pen',k:'ペン'},
    {j:'ほう',e:'law/direction',k:'法/方'},
    {j:'ほか',e:'other',k:'他'},
    {j:'ほし',e:'star',k:'星'},
    {j:'ほす',e:'to hang dry',k:'干す'},
    {j:'ほど',e:'extent/degree',k:'程'},
    {j:'ほね',e:'bone',k:'骨'},
    {j:'ほん',e:'book',k:'本'},
    {j:'ぼう',e:'stick/rod',k:'棒'},
    {j:'ぼく',e:'me/I (male)',k:'僕'},
    {j:'まい',e:'every/sheet',k:'毎/枚'},
    {j:'まえ',e:'front',k:'前'},
    {j:'まご',e:'grandchild',k:'孫'},
    {j:'ます',e:'trout',k:'鱒'},
    {j:'まず',e:'first of all',k:'先ず'},
    {j:'また',e:'again',k:'又'},
    {j:'まだ',e:'still',k:'まだ'},
    {j:'まち',e:'town/city',k:'町/街'},
    {j:'まつ',e:'to wait',k:'待つ'},
    {j:'まで',e:'until',k:'まで'},
    {j:'まど',e:'window',k:'窓'},
    {j:'まね',e:'mimicry/pretense',k:'真似'},
    {j:'まま',e:'as is',k:'まま'},
    {j:'まめ',e:'bean',k:'豆'},
    {j:'まゆ',e:'eyebrow',k:'眉'},
    {j:'まる',e:'circle',k:'丸'},
    {j:'まん',e:'ten thousand',k:'万'},
    {j:'みぎ',e:'right (direction)',k:'右'},
    {j:'みず',e:'water',k:'水'},
    {j:'みせ',e:'shop/store',k:'店'},
    {j:'みそ',e:'miso',k:'味噌'},
    {j:'みち',e:'road/path',k:'道'},
    {j:'みな',e:'everyone',k:'皆'},
    {j:'みみ',e:'ear',k:'耳'},
    {j:'みる',e:'to look/see',k:'見る'},
    {j:'みん',e:'people',k:'民'},
    {j:'むぎ',e:'wheat/barley',k:'麦'},
    {j:'むく',e:'to peel',k:'剥く'},
    {j:'むし',e:'insect/bug',k:'虫'},
    {j:'むす',e:'to steam',k:'蒸す'},
    {j:'むね',e:'chest/heart',k:'胸'},
    {j:'むら',e:'village',k:'村'},
    {j:'むり',e:'impossible',k:'無理'},
    {j:'め',e:'eye',k:'目'},
    {j:'めい',e:'name/famous',k:'名/明'},
    {j:'めし',e:'meal/rice',k:'飯'},
    {j:'めん',e:'noodles/mask',k:'麺/面'},
    {j:'もう',e:'already/more',k:'もう'},
    {j:'もし',e:'if',k:'もし'},
    {j:'もち',e:'rice cake',k:'餅'},
    {j:'もつ',e:'to hold/have',k:'持つ'},
    {j:'もと',e:'origin/base',k:'元/本'},
    {j:'もの',e:'thing',k:'物'},
    {j:'もも',e:'thigh/peach',k:'腿/桃'},
    {j:'もり',e:'forest',k:'森'},
    {j:'もる',e:'to serve/heap',k:'盛る'},
    {j:'もん',e:'gate/question',k:'門/問'},
    {j:'やき',e:'pottery/grilling',k:'焼き'},
    {j:'やぎ',e:'goat',k:'山羊'},
    {j:'やく',e:'about/role',k:'約/役'},
    {j:'やね',e:'roof',k:'屋根'},
    {j:'やま',e:'mountain',k:'山'},
    {j:'やみ',e:'darkness',k:'闇'},
    {j:'やる',e:'to do',k:'やる'},
    {j:'ゆえ',e:'reason/cause',k:'故'},
    {j:'ゆか',e:'floor',k:'床'},
    {j:'ゆき',e:'snow',k:'雪'},
    {j:'ゆげ',e:'steam',k:'湯気'},
    {j:'ゆび',e:'finger',k:'指'},
    {j:'ゆみ',e:'bow (archery)',k:'弓'},
    {j:'ゆめ',e:'dream',k:'夢'},
    {j:'よう',e:'way/business',k:'様/用'},
    {j:'よく',e:'often/well',k:'良く'},
    {j:'よこ',e:'side/horizontal',k:'横'},
    {j:'よぶ',e:'to call',k:'呼ぶ'},
    {j:'よむ',e:'to read',k:'読む'},
    {j:'よめ',e:'bride/wife',k:'嫁'},
    {j:'よる',e:'night',k:'夜'},
    {j:'よん',e:'four',k:'四'},
    {j:'らく',e:'comfortable/easy',k:'楽'},
    {j:'りく',e:'land',k:'陸'},
    {j:'りつ',e:'rate',k:'率'},
    {j:'るす',e:'absence from home',k:'留守'},
    {j:'れい',e:'zero/bow/example',k:'零/礼/例'},
    {j:'ろく',e:'six',k:'六'},
    {j:'わき',e:'side/armpit',k:'脇'},
    {j:'わく',e:'frame',k:'枠'},
    {j:'わけ',e:'reason',k:'訳'},
    {j:'わざ',e:'skill/technique',k:'技'},
    {j:'わし',e:'eagle',k:'鷲'},
    {j:'わた',e:'cotton',k:'綿'},
    {j:'わに',e:'crocodile',k:'鰐'},
    {j:'わる',e:'to break/split',k:'割る'},
    {j:'われ',e:'I/we',k:'我'},
    {j:'わん',e:'bay/bowl',k:'湾/椀'},
    {j:'パン',e:'bread',k:'パン'},
  ]},
];

// Categories - themed slices of the same 424 words (grades shared with chunks)
const CATEGORIES = [
  {id:'animals',name:'Animals',icon:'🐾',
   words:['あり','いか','うし','うま','えび','かに','かめ','かも','さば','さめ','さる','せみ','ぞう','たい','たか','たこ','つる','とら','とり','ねこ','はと','ふぐ','ぶた','へび','ます','むし','やぎ','わし','わに']},
  {id:'verbs',name:'Verbs',icon:'⚡',
   words:['あう','あく','ある','いう','いく','いぬ','いる','うたう','うつ','うる','おす','おどる','おり','かう','かく','かげ','かす','かつ','かむ','きく','きる','くう','くる','けす','しぬ','しる','すう','すむ','する','たつ','だく','つく','つむ','つり','でる','とぶ','とる','なく','なる','にる','ぬい','ぬく','ぬぐ','ねる','のむ','のる','はく','ばい','ひく','ふむ','ふる','ほす','まつ','まど','みる','むく','むす','もつ','もる','やる','よぶ','よむ','わる']},
  {id:'body',name:'Body Parts',icon:'🧠',
   words:['あし','うで','えり','かお','かた','がく','くち','くび','くま','さい','しり','せ','つち','て','とし','なし','ねん','のど','は','はな','はら','ひげ','ひざ','まゆ','みみ','め','ゆび']},
  {id:'people',name:'People & Pronouns',icon:'👥',
   words:['あに','あね','いみ','うち','おじ','おば','おや','かい','かれ','きみ','げり','ごま','さき','さら','せつ','ぜひ','たな','ちち','つま','とき','ない','なつ','にく','はは','ひと','ひま','ひる','ふく','ほか','ぼく','まい','まご','むぎ','むね','めい','めし','よめ','るす','わく','われ']},
  {id:'house',name:'House & Things',icon:'🏠',
   words:['あじ','あせ','あな','あみ','いえ','いす','いわ','おび','かぎ','かさ','かべ','くつ','げた','すそ','そば','どろ','なべ','はい','はこ','はし','はり','ひも','びん','ふで','ふろ','へや','ぺん','ほん','ぼう','まる','やね','ゆげ','ゆみ','わた']},
  {id:'nature',name:'Nature & Weather',icon:'🌿',
   words:['あめ','うみ','かわ','きり','くさ','くも','しま','しも','すな','せき','そら','つゆ','なみ','にじ','のり','はれ','ふう','ほし','もり','やま']},
  {id:'places',name:'Places & Time',icon:'📍',
   words:['あき','あさ','いま','うえ','えき','かど','きし','きた','けさ','した','じき','すぐ','すみ','そと','ちか','ちゅ','つき','つぎ','てら','てん','なか','にし','にち','にわ','はる','ばん','ふゆ','まえ','みぎ','みせ','みち','むら','ゆき','よる']},
  {id:'food',name:'Food & Drink',icon:'🍱',
   words:['いも','うめ','くり','こめ','さけ','しお','すし','ちゃ','なす','ねぎ','まめ','みそ','めん','もち','もも','やき','パン']},
  {id:'abstract',name:'Abstract & Colors',icon:'💭',
   words:['あい','あお','あか','いい','いき','いと','いろ','おと','かぜ','ぎむ','ぎり','きん','ぎん','くろ','こい','こえ','こと','さむ','しな','しろ','すき','せい','せん','ため','ぬれ','ひん','へん','べつ','むり','もの','ゆえ','ゆめ','らく','わけ']},
  {id:'grammar',name:'Grammar & Questions',icon:'📝',
   words:['ああ','いつ','から','けど','こう','ここ','これ','しか','そう','そこ','それ','ただ','だけ','だれ','って','です','とか','どう','どこ','どれ','なぜ','など','なに','なら','なん','ので','はず','はん','ほど','まだ','まで','もし']},
  {id:'numbers',name:'Numbers & Adverbs',icon:'🔢',
   words:['いし','いち','おく','かね','さん','つい','なな','はち','ふた','ふと','ほね','まず','また','まね','まん','みな','もう','よく','よん','ろく']},
  {id:'other',name:'Other',icon:'📦',
   words:['あと','いや','うそ','うた','うん','え','おか','かず','かち','かみ','きす','きず','きぬ','くせ','くに','くみ','ぐち','けが','けん','こし','ごと','ごみ','しき','じこ','すえ','せな','そく','そで','たけ','たね','たび','だい','ちず','つめ','てき','てつ','とう','とげ','とこ','どじ','なわ','ぬし','ぬの','ぬま','ねじ','ねつ','のち','はだ','ばか','ばら','ひに','ひび','ふち','ふね','へそ','べん','ほう','まち','まま','みず','みん','もと','もん','やく','やみ','ゆか','よう','よこ','りく','りつ','れい','わき','わざ','わん']},
];

// Build a lookup: hiragana -> word object from CHUNKS
const ALL_WORDS = {};
CHUNKS.forEach(c => c.words.forEach(w => { ALL_WORDS[w.j] = w; }));
// Resolve category word lists to actual word objects
CATEGORIES.forEach(cat => { cat.wordObjs = cat.words.map(j => ALL_WORDS[j]).filter(Boolean); });

// ── GENKI TEXTBOOK LESSONS ──
const GENKI_LESSONS = [
  {id:'g1-1', name:'Lesson 1', book:'Genki 1', words:[
    {j:'だいがく',e:'college/university',k:'大学'},
    {j:'こうこう',e:'high school',k:'高校'},
    {j:'がくせい',e:'student',k:'学生'},
    {j:'だいがくせい',e:'college student',k:'大学生'},
    {j:'りゅうがくせい',e:'international student',k:'留学生'},
    {j:'だいがくいんせい',e:'graduate student',k:'大学院生'},
    {j:'せんせい',e:'teacher',k:'先生'},
    {j:'いちねんせい',e:'first-year student',k:'一年生'},
    {j:'せんこう',e:'major',k:'専攻'},
    {j:'わたし',e:'I/me',k:'私'},
    {j:'ともだち',e:'friend',k:'友達'},
    {j:'にほんじん',e:'Japanese person',k:'日本人'},
    {j:'さん',e:'Mr./Ms.',k:'さん'},
    {j:'じん',e:'...person (nationality)',k:'人'},
    {j:'ねんせい',e:'...year student',k:'年生'},
    {j:'ご',e:'...language',k:'語'},
    {j:'いま',e:'now',k:'今'},
    {j:'ごぜん',e:'A.M.',k:'午前'},
    {j:'ごご',e:'P.M.',k:'午後'},
    {j:'はん',e:'half (past)',k:'半'},
    {j:'じ',e:"...o'clock",k:'時'},
    {j:'さい',e:'...years old',k:'歳'},
    {j:'でんわ',e:'telephone',k:'電話'},
    {j:'ばんごう',e:'number (sequence)',k:'番号'},
    {j:'なまえ',e:'name',k:'名前'},
    {j:'にほんご',e:'Japanese language',k:'日本語'},
    {j:'えいご',e:'English language',k:'英語'},
    {j:'にほん',e:'Japan',k:'日本'},
    {j:'アメリカ',e:'America',k:'アメリカ'},
    {j:'イギリス',e:'Britain',k:'イギリス'},
    {j:'オーストラリア',e:'Australia',k:'オーストラリア'},
    {j:'かんこく',e:'Korea',k:'韓国'},
    {j:'ちゅうごく',e:'China',k:'中国'},
    {j:'インド',e:'India',k:'インド'},
    {j:'はい',e:'yes',k:'はい'},
    {j:'いいえ',e:'no',k:'いいえ'},
    {j:'あのう',e:'um.../excuse me',k:'あのう'},
    {j:'そうです',e:"that's right",k:'そうです'},
    {j:'そうですか',e:'is that so?',k:'そうですか'},
    {j:'いち',e:'one',k:'一'},
    {j:'に',e:'two',k:'二'},
    {j:'よん',e:'four',k:'四'},
    {j:'ろく',e:'six',k:'六'},
    {j:'なな',e:'seven',k:'七'},
    {j:'はち',e:'eight',k:'八'},
    {j:'きゅう',e:'nine',k:'九'},
    {j:'じゅう',e:'ten',k:'十'},
    {j:'いちじ',e:"one o'clock",k:'一時'},
    {j:'にじ',e:"two o'clock",k:'二時'},
    {j:'さんじ',e:"three o'clock",k:'三時'},
    {j:'よじ',e:"four o'clock",k:'四時'},
    {j:'ごじ',e:"five o'clock",k:'五時'},
    {j:'ろくじ',e:"six o'clock",k:'六時'},
    {j:'しちじ',e:"seven o'clock",k:'七時'},
    {j:'はちじ',e:"eight o'clock",k:'八時'},
    {j:'くじ',e:"nine o'clock",k:'九時'},
    {j:'じゅうじ',e:"ten o'clock",k:'十時'},
    {j:'じゅういちじ',e:"eleven o'clock",k:'十一時'},
    {j:'じゅうにじ',e:"twelve o'clock",k:'十二時'},
  ]},
  // Add more lessons here: {id:'g1-2', name:'Lesson 2', book:'Genki 1', words:[...]},
];

const MNEMONICS = {
  "ああ": "Ah-ah! Like THAT thing way over there!",
  "あい": "AI (eye) contact leads to LOVE",
  "あう": "Ow! I bumped into you — we MEET again",
  "あお": "A-oh no, I\'m feeling BLUE",
  "あか": "A car? No, a RED car!",
  "あき": "Ackey season = AUTUMN harvest",
  "あく": "Aku! The door flies OPEN",
  "あさ": "Ah-sa beautiful MORNING sunrise",
  "あし": "Ashy LEG needs lotion on that FOOT",
  "あじ": "Ah-ji — this TASTE is amazing!",
  "あせ": "A say? No, SWEAT is pouring down",
  "あと": "Otto! AFTER you, sir",
  "あな": "Anna fell in a HOLE",
  "あに": "Ani-mation — my OLDER BROTHER loves anime",
  "あね": "On-nay — my OLDER SISTER says nay to everything",
  "あみ": "Ah-me! I\'m caught in a NET",
  "あめ": "Ah-may! RAIN and CANDY falling from the sky",
  "あり": "Are-ee those ANTS? On my picnic?!",
  "ある": "Ah-ru — things EXIST in this room",
  "いい": "Eee! That\'s GOOD!",
  "いう": "He-you! I need to SAY something",
  "いえ": "Ee-eh, nice HOUSE you got there",
  "いか": "Ee-ka — SQUID ink pasta",
  "いき": "Eeky — take a BREATH, you\'re alive in SPIRIT",
  "いく": "Ee-koo! Let\'s GO!",
  "いし": "Itchy STONE/ROCK rash",
  "いす": "He-sue sat in his CHAIR",
  "いち": "Itchy — ONE mosquito bite",
  "いつ": "It\'s-oo — WHEN is it?",
  "いと": "Eeto... pulling the THREAD",
  "いぬ": "In-new DOG we trust",
  "いま": "Ee-ma, come here NOW to the LIVING ROOM",
  "いみ": "Ee-me? What\'s the MEANING of this?",
  "いも": "Ee-mo! That\'s a big POTATO",
  "いや": "Ee-ya! NO! UNPLEASANT!",
  "いる": "He-roo — the hero EXISTS (living)",
  "いろ": "Ee-row of every COLOR in the rainbow",
  "いわ": "Ee-wah, that\'s a huge ROCK",
  "うえ": "Oo-way up ABOVE, on TOP",
  "うし": "Oo-she — that COW is female",
  "うそ": "Ooh-so that was a LIE?!",
  "うた": "Ooh-ta — what a SONG!",
  "うたう": "Ooh-ta-oo — I love TO SING",
  "うち": "Oo-chi — come to my HOUSE/HOME",
  "うつ": "Oo-tsu! HIT the target!",
  "うで": "Oo-day — ARM day at the gym",
  "うま": "Ooh-ma, what a HORSE!",
  "うみ": "Oo-me — the SEA/OCEAN surrounds me",
  "うめ": "Oo-may — PLUM delicious",
  "うる": "Oo-roo — I\'ll SELL it to you",
  "うん": "Unn — YEAH, uh-huh, nodding",
  "え": "Eh? What a PICTURE!",
  "えき": "Eki — every STATION has an exit",
  "えび": "Eb-ee — SHRIMP on the barbie",
  "えり": "Airy COLLAR on this shirt",
  "おか": "Oh-ka — a nice HILL over there",
  "おく": "Oh-koo — ONE HUNDRED MILLION is a lot",
  "おじ": "Oh-jee — UNCLE G!",
  "おす": "Oh-sue! PUSH the button!",
  "おと": "Oh-toe — I stubbed my toe, what a SOUND",
  "おどる": "Oh-door-oo — open the door and DANCE",
  "おば": "Oh-ba — AUNT Obama? Not quite",
  "おび": "Oh-bee — a BELT/SASH around the obi (kimono)",
  "おや": "Oh-ya — PARENT always says oh yeah",
  "おり": "Oh-ree — FOLDING origami",
  "かい": "Kai TIMES (COUNTER) — how many kais?",
  "かう": "Cow — I want to BUY that cow",
  "かお": "Ka-oh — what a FACE!",
  "かぎ": "Ka-gee — got my KEY",
  "かく": "Ka-koo — WRITE it down, cuckoo!",
  "かげ": "Ka-gay — my SHADOW looks fabulous",
  "かさ": "Ka-sa — casa needs an UMBRELLA",
  "かす": "Ka-sue — LEND me the money or I\'ll sue",
  "かず": "Ka-zoo — the NUMBER of kazoos in the band",
  "かぜ": "Ka-zay — the WIND gave me a COLD",
  "かた": "Ka-ta — karate SHOULDER chop",
  "かち": "Ka-chi — cha-ching! VALUE/WIN!",
  "かつ": "Katsu — cutlet helps you WIN",
  "かど": "Ka-doh — turn the CORNER",
  "かに": "Ka-nee — CRAB walks on its knees",
  "かね": "Ka-nay — show me the MONEY",
  "かべ": "Ka-bay — the WALL of the bay",
  "かみ": "Ka-me — PAPER, HAIR, GOD — kami does it all",
  "かむ": "Ka-moo — the cow goes moo when you BITE it",
  "かめ": "Ka-may — the TURTLE in Finding Nemo says \'duuude\'",
  "かも": "Ka-mo — could be a DUCK, you know",
  "から": "Kara — FROM kara-oke (empty orchestra)",
  "かれ": "Ka-ray — HE is a ray of sunshine",
  "かわ": "Ka-wa — the RIVER flows kawaii",
  "がく": "Gaku — LEARNING from gakkou (school)",
  "きく": "Kee-koo — LISTEN to the cuckoo/CHRYSANTHEMUM",
  "きし": "Kee-she — the SHORE/KNIGHT\'s she-ld",
  "きす": "Key-su — sealed with a KISS",
  "きず": "Key-zoo — WOUND at the zoo",
  "きた": "Key-ta — NORTH on the key-ta (guitar)",
  "きぬ": "Key-new — SILK so new and shiny",
  "きみ": "Key-me — YOU (familiar) are key to me",
  "きり": "Key-ree — FOG is key to the eerie feeling",
  "きる": "Key-roo — CUT with the key",
  "きん": "Keen — GOLD is keen and shiny",
  "ぎむ": "Ghee-moo — it\'s your DUTY/OBLIGATION to moo",
  "ぎり": "Ghee-ree — OBLIGATION? That\'s greasy",
  "ぎん": "Gin — SILVER gin and tonic",
  "くう": "Koo — TO EAT (rough) like a bird goes coo",
  "くさ": "Koo-sa — GRASS in the courtyard (casa)",
  "くせ": "Koo-say — bad HABIT/QUIRK of saying \'cool, say what?\'",
  "くち": "Koo-chi — MOUTH goes smoochie",
  "くつ": "Koo-tsu — SHOES go koo-tsu koo-tsu when you walk",
  "くに": "Koo-nee — COUNTRY of the koo-nee rabbit",
  "くび": "Koo-bee — NECK like a Kobe beef",
  "くま": "Koo-ma — BEAR like a puma but cuter",
  "くみ": "Koo-me — CLASS/GROUP come with me",
  "くも": "Koo-mo — CLOUD/SPIDER como in the sky",
  "くり": "Koo-ree — CHESTNUT curry",
  "くる": "Koo-roo — COME here, you cool dude",
  "くろ": "Koo-ro — BLACK crow",
  "ぐち": "Goo-chi — Gucci COMPLAINT — too expensive!",
  "けが": "Kay-ga — INJURY from Lady Gaga\'s shoe",
  "けさ": "Kay-sa — THIS MORNING I woke up in a casa",
  "けす": "Kay-sue — TURN OFF/ERASE — case dismissed",
  "けど": "Kay-doh — BUT/HOWEVER...",
  "けん": "Ken — PREFECTURE/TICKET — Ken\'s ticket to Osaka",
  "げた": "Gay-ta — WOODEN SANDALS — geta clop clop",
  "げり": "Gay-ree — DIARRHEA — Gary\'s stomach trouble",
  "こい": "Koi — LOVE/CARP — koi fish pond of love",
  "こう": "Koh — LIKE THIS, you know?",
  "こえ": "Ko-eh — VOICE echoes",
  "ここ": "Ko-ko — HERE at the cocoa shop",
  "こし": "Ko-she — WAIST/HIP — she\'s got style",
  "こと": "Ko-to — a MATTER/THING on the to-do list",
  "こめ": "Ko-may — UNCOOKED RICE comes in May",
  "これ": "Ko-ray — THIS ray of light",
  "ごと": "Go-to — EACH/EVERY go-to spot",
  "ごま": "Go-ma — SESAME! Go mama, cook with sesame!",
  "ごみ": "Go-me — TRASH/GARBAGE — go clean me up",
  "さい": "Sai — AGE — sigh, another year older",
  "さき": "Sa-key — AHEAD/FUTURE — sake is key to the future",
  "さけ": "Sa-kay — SAKE/ALCOHOL — sake cocktail",
  "さば": "Sa-ba — MACKEREL sub-a sandwich",
  "さむ": "Sa-moo — COLD — so cold the cow goes \'sa-moo\'",
  "さめ": "Sa-may — SHARK in the same ocean",
  "さら": "Sa-ra — PLATE — Sara set the plate",
  "さる": "Sa-roo — MONKEY — safari monkey",
  "さん": "San — THREE — Mr. San has 3 kids",
  "しお": "She-oh — SALT — she owes me salt",
  "しか": "She-ka — DEER/only — Shika deer in Nara",
  "しき": "She-key — CEREMONY/STYLE — she\'s key to the ceremony",
  "した": "She-ta — BELOW/TONGUE — she-ta (under) the table, tongue out",
  "しな": "She-na — GOODS/QUALITY — Sheena has quality goods",
  "しぬ": "She-new — TO DIE — she knew it was coming",
  "しま": "She-ma — ISLAND — she-ma beautiful island",
  "しも": "She-mo — FROST — she moaned about the frost",
  "しり": "She-ree — BUTT/ASS — shiri Sherry\'s behind",
  "しる": "She-roo — TO KNOW — Sherlock knows",
  "しろ": "She-ro — WHITE — she wrote in white",
  "じき": "Jee-key — SOON/DIRECTLY — gee, the key arrives soon",
  "じこ": "Jee-ko — ACCIDENT — gee, oh no, an accident!",
  "すう": "Soo — TO SUCK — soo through a straw",
  "すえ": "Soo-eh — END/FUTURE — sue at the end",
  "すき": "Ski — LIKE/LOVE — I like skiing",
  "すぐ": "Soo-goo — RIGHT AWAY/SOON — super goo sticks right away",
  "すし": "Soo-she — SUSHI — sushi she loves",
  "すそ": "Soo-so — HEM — so-so hemline",
  "すな": "Soo-na — SAND — soon-a be sandy",
  "すみ": "Soo-me — CORNER/CHARCOAL — sue me in the corner",
  "すむ": "Soo-moo — TO LIVE/RESIDE — sumo wrestlers live here",
  "する": "Soo-roo — TO DO — sure, I\'ll do it",
  "せ": "Seh — HEIGHT/BACK — say, how tall are you?",
  "せい": "Say — NATURE/SPIRIT — say it with spirit",
  "せき": "Seh-key — COUGH/SEAT — secretary\'s cough from her seat",
  "せつ": "Set-sue — THEORY/OCCASION — set the occasion",
  "せな": "Seh-na — BACK (body) — Senna\'s strong back",
  "せみ": "Seh-me — CICADA — semi buzzing sound",
  "せん": "Sen — LINE — send along the line",
  "ぜひ": "Zeh-hee — BY ALL MEANS — zeh-hee hee, absolutely!",
  "そう": "Soh — LIKE THAT — so, it\'s like that",
  "そく": "So-koo — RULE/PAIR — sock rule: always in pairs",
  "そこ": "So-ko — THERE/BOTTOM — so-ko at the bottom",
  "そで": "So-day — SLEEVE — so today I rolled up my sleeve",
  "そと": "So-toe — OUTSIDE — so, toe outside the door",
  "そば": "So-ba — BESIDE/SOBA — soba noodles beside me",
  "そら": "So-ra — SKY — so-ra beautiful sky (solar)",
  "それ": "So-ray — THAT THING — so, ray of light on that thing",
  "ぞう": "Zo — ELEPHANT — zoo elephant",
  "たい": "Tai — SEA BREAM — Thai sea bream fish",
  "たか": "Ta-ka — HAWK — taka flies high",
  "たけ": "Ta-kay — BAMBOO — take the bamboo",
  "たこ": "Ta-ko — OCTOPUS/KITE — taco-shaped octopus",
  "ただ": "Ta-da — FREE/ONLY — ta-da! It\'s free!",
  "たつ": "Ta-tsu — TO STAND — tatsu! Stand up!",
  "たな": "Ta-na — SHELF — tan-a shelf in the tanning salon",
  "たね": "Ta-nay — SEED — ta-nay, plant the seed",
  "たび": "Ta-bee — TRIP/JOURNEY — tabby cat\'s journey",
  "ため": "Ta-may — FOR/BENEFIT — ta-may: for your benefit, Tammy",
  "だい": "Dai — STAND/GENERATION — die-hard stand, dai generation",
  "だく": "Da-koo — TO EMBRACE — duck and embrace",
  "だけ": "Da-kay — JUST/ONLY — okay, just that, only that",
  "だれ": "Da-ray — WHO — who is that? Dare say!",
  "ちか": "Chi-ka — UNDERGROUND — chica underground",
  "ちず": "Chi-zoo — MAP — cheese on the map (chi-zu)",
  "ちち": "Chi-chi — FATHER — chi-chi dad is fancy",
  "ちゃ": "Cha — TEA — cha cha cha, tea time",
  "ちゅ": "Choo — MIDDLE — choo-choo train in the middle",
  "って": "Tte — QUOTATION MARKER — like \'that\' he said",
  "つい": "Tsui — ACCIDENTALLY — oopsie, tsui!",
  "つき": "Tsu-key — MOON/MONTH — moonlight is the key",
  "つぎ": "Tsu-ghee — NEXT — next in the tsue-ghee line",
  "つく": "Tsu-koo — TO ARRIVE/TURN ON — tsukou! We arrived!",
  "つち": "Tsu-chi — SOIL/EARTH — touch the soil",
  "つま": "Tsu-ma — WIFE — tsunami of love for my wife",
  "つむ": "Tsu-moo — TO PILE UP — too-moo-ch piled up",
  "つめ": "Tsu-may — NAIL/CLAW — tsume — zoom into that claw",
  "つゆ": "Tsu-you — RAINY SEASON/DEW — rainy season gets you wet",
  "つり": "Tsu-ree — FISHING — truly love fishing",
  "つる": "Tsu-roo — CRANE — true crane bird",
  "て": "Teh — HAND — tech in your hand",
  "てき": "Teh-key — ENEMY — techy enemy hacker",
  "てつ": "Tet-sue — IRON — Tetsu the iron man",
  "てら": "Teh-ra — TEMPLE — terra (earth) temple",
  "てん": "Ten — POINT/SHOP — ten points at the shop",
  "です": "Dess — TO BE (copula) — desk is where it is",
  "でる": "Deh-roo — TO LEAVE/EXIT — dare you to leave",
  "とう": "Toh — TOWER/PARTY — Tokyo Tower party",
  "とか": "To-ka — THINGS LIKE — and such, you know, toka",
  "とき": "To-key — TIME/WHEN — Tokyo time is key",
  "とげ": "To-gay — THORN — together with thorns",
  "とこ": "To-ko — BED/PLACE — toco toucan sleeps in bed",
  "とし": "To-she — YEAR — toshiba makes a new one each year",
  "とぶ": "To-boo — TO FLY/JUMP — taboo to fly!",
  "とら": "To-ra — TIGER — tiger says \'to-ra!\'",
  "とり": "To-ree — BIRD — tree bird",
  "とる": "To-roo — TO TAKE — too true, I\'ll take it",
  "どう": "Doh — HOW/COPPER — doh! How did that happen?",
  "どこ": "Do-ko — WHERE — doco? Where?",
  "どじ": "Do-jee — BLUNDER/CLUMSY — dodgy and clumsy",
  "どれ": "Do-ray — WHICH ONE — do-re-mi, which note?",
  "どろ": "Do-ro — MUD — Dora explored the mud",
  "ない": "Nai — NOT EXIST — nah, it doesn\'t exist",
  "なか": "Na-ka — MIDDLE — nacho in the middle",
  "なく": "Na-koo — TO CRY — no-coo, the baby cries",
  "なし": "Na-she — PEAR — gnash on a pear",
  "なす": "Na-sue — EGGPLANT — NASA grows eggplant in space",
  "なぜ": "Na-zay — WHY — Nazi? WHY?!",
  "なつ": "Na-tsu — SUMMER — nuts about summer",
  "など": "Na-doh — ETC./AND SO ON — nah-doh, and so on",
  "なな": "Na-na — SEVEN — nana is 7 bananas",
  "なに": "Na-nee — WHAT — nanny says what?!",
  "なべ": "Na-bay — POT — nabe hot pot in the bay",
  "なみ": "Na-me — WAVE — name every wave",
  "なら": "Na-ra — IF/IN CASE — Nara deer, if you visit",
  "なる": "Na-roo — TO BECOME — Naruto becomes Hokage",
  "なわ": "Na-wa — ROPE — naww, skip the rope",
  "なん": "Nan — WHAT/HOW MANY — naan bread: how many?",
  "にく": "Nee-koo — MEAT — Nick cooks meat",
  "にし": "Nee-she — WEST — knee-she faces west",
  "にじ": "Nee-jee — RAINBOW — knee-jee rainbow landing",
  "にち": "Nee-chi — DAY — Nietzsche\'s day off",
  "にる": "Nee-roo — TO BOIL/SIMMER — nearly boiling",
  "にわ": "Nee-wa — GARDEN — niwa: knee-deep in the garden",
  "ぬい": "Noo-ee — SEWING — new-ee thread for sewing",
  "ぬく": "Noo-koo — TO PULL OUT — nuke it, pull it out",
  "ぬぐ": "Noo-goo — TO UNDRESS — new goo when you undress? Weird",
  "ぬし": "Noo-she — MASTER/OWNER — new-she, the new master",
  "ぬの": "Noo-no — CLOTH — no-no, that\'s my cloth!",
  "ぬま": "Noo-ma — SWAMP — pneuma swamp gas",
  "ぬれ": "Noo-ray — WET — new rain made everything wet",
  "ねぎ": "Neh-ghee — GREEN ONION — Negi ghee butter",
  "ねこ": "Neh-ko — CAT — neko is the most famous cat word",
  "ねじ": "Neh-jee — SCREW — energy screw driver",
  "ねつ": "Net-sue — FEVER — Netflix fever, can\'t stop watching",
  "ねる": "Neh-roo — TO SLEEP — Nero sleeps while Rome burns",
  "ねん": "Nen — YEAR — a new nen (year) begins",
  "のち": "No-chi — LATER/AFTER — nacho later, not now",
  "ので": "No-day — BECAUSE/SINCE — no day goes by because...",
  "のど": "No-doh — THROAT — no-doh! My throat hurts",
  "のむ": "No-moo — TO DRINK — nom nom drink up",
  "のり": "No-ree — SEAWEED/GLUE — nori seaweed sticks like glue",
  "のる": "No-roo — TO RIDE — no rule against riding",
  "は": "Ha — TOOTH — ha! Show your teeth",
  "はい": "Hai — ASH/GRAY — hi there, ashy gray",
  "はく": "Ha-koo — TO WEAR (bottom) — hakuna matata, wear pants",
  "はこ": "Ha-ko — BOX — hack open the box",
  "はし": "Ha-she — BRIDGE/CHOPSTICKS — she crosses the bridge with chopsticks",
  "はず": "Ha-zoo — SHOULD BE — has to be at the zoo",
  "はだ": "Ha-da — SKIN — had a skin problem",
  "はち": "Ha-chi — EIGHT — Hachi the dog waited 8 years",
  "はと": "Ha-to — PIGEON/DOVE — hot pigeon on the roof",
  "はな": "Ha-na — FLOWER/NOSE — Hannah\'s flower nose",
  "はは": "Ha-ha — MOTHER — ha ha, mother laughs",
  "はら": "Ha-ra — BELLY — hara-kiri, belly cut",
  "はり": "Ha-ree — NEEDLE — Harry pricked by a needle",
  "はる": "Ha-roo — SPRING — Harold loves spring",
  "はれ": "Ha-ray — CLEAR WEATHER — hooray! Clear weather!",
  "はん": "Han — HALF — Han Solo is half smuggler",
  "ばい": "Bai — DOUBLE — buy one get one, double!",
  "ばか": "Ba-ka — IDIOT/FOOL — baka! Classic insult",
  "ばら": "Ba-ra — ROSE — a bar of roses",
  "ばん": "Ban — EVENING — banned from evening events",
  "ひく": "He-koo — TO PULL/PLAY — he could pull and play guitar",
  "ひげ": "He-gay — BEARD — he\'s gay for his magnificent beard",
  "ひざ": "He-za — KNEE — he\'s-a on his knees",
  "ひと": "He-toe — PERSON — heat-o a person up",
  "ひに": "He-nee — DAILY — henny penny, daily eggs",
  "ひび": "He-bee — CRACK/DAILY — he-bee crack daily",
  "ひま": "He-ma — FREE TIME — he-ma has free time to spare",
  "ひも": "He-mo — STRING — he\'s so emo, pulling strings",
  "ひる": "He-roo — DAYTIME/NOON — hero works at noon",
  "ひん": "Heen — GOODS/ELEGANCE — a hint of elegance in the goods",
  "びん": "Been — BOTTLE/JAR — been in a bottle",
  "ふう": "Foo — MANNER/WIND — foo! Blow in the wind",
  "ふく": "Foo-koo — FORTUNE/CLOTHES — fuku means lucky clothes",
  "ふぐ": "Foo-goo — PUFFERFISH — fugu — fugly but delicious",
  "ふた": "Foo-ta — LID/TWO — put a foot on the lid, two of them",
  "ふち": "Foo-chi — EDGE/RIM — Fuchi Gucci edge rim",
  "ふで": "Foo-day — BRUSH — food day? No, brush day!",
  "ふと": "Foo-to — SUDDENLY — photo? Suddenly!",
  "ふね": "Foo-nay — SHIP/BOAT — funny ship",
  "ふむ": "Foo-moo — TO STEP ON — hmm, foo-moo, I stepped on something",
  "ふゆ": "Foo-you — WINTER — winter is for you, foo!",
  "ふる": "Foo-roo — TO FALL (rain) — full rain falling",
  "ふろ": "Foo-ro — BATH — furo bath, flow into relaxation",
  "ぶた": "Boo-ta — PIG — boo-ta that pig!",
  "へそ": "Heh-so — NAVEL — heh, so that\'s your belly button",
  "へび": "Heh-bee — SNAKE — heavy snake slithers",
  "へや": "Heh-ya — ROOM — hey-ya, nice room!",
  "へん": "Hen — STRANGE — a hen doing math is strange",
  "べつ": "Bet-sue — SEPARATE/DIFFERENT — I bet it\'s different",
  "べん": "Ben — CONVENIENCE — Ben\'s convenience store",
  "ぺん": "Pen — PEN — pen is pen. Easy!",
  "ほう": "Hoh — LAW/DIRECTION — ho! The law points that direction",
  "ほか": "Ho-ka — OTHER — mocha and other drinks",
  "ほし": "Ho-she — STAR — hoshii star, I want it",
  "ほす": "Ho-sue — TO HANG DRY — hose it then hang dry",
  "ほど": "Ho-doh — EXTENT/DEGREE — how doh! To what degree?",
  "ほね": "Ho-nay — BONE — honey bone",
  "ほん": "Hon — BOOK — hon-estly, read a book",
  "ぼう": "Boh — STICK/ROD — bow-shaped stick",
  "ぼく": "Bo-koo — ME/I (male) — boku is me, beaucoup!",
  "まい": "Mai — EVERY/SHEET — my every sheet of paper",
  "まえ": "Ma-ay — FRONT — may I go to the front?",
  "まご": "Ma-go — GRANDCHILD — mango for my grandchild",
  "ます": "Ma-sue — TROUT — master trout fisher",
  "まず": "Ma-zoo — FIRST OF ALL — maze first, zoo second",
  "また": "Ma-ta — AGAIN — mata again! Matador returns",
  "まだ": "Ma-da — STILL — my da (dad) is still here",
  "まち": "Ma-chi — TOWN/CITY — matcha in the city",
  "まつ": "Ma-tsu — TO WAIT — must wait, matsuri festival",
  "まで": "Ma-day — UNTIL — made it until today",
  "まど": "Ma-doh — WINDOW — my doh! Clean the window",
  "まね": "Ma-nay — MIMICRY/PRETENSE — money mimics wealth",
  "まま": "Ma-ma — AS IS — mama keeps things as-is",
  "まめ": "Ma-may — BEAN — mommy\'s magic beans",
  "まゆ": "Ma-you — EYEBROW — mayo on your eyebrow!",
  "まる": "Ma-roo — CIRCLE — maroo the round one",
  "まん": "Man — TEN THOUSAND — man, that\'s 10,000!",
  "みぎ": "Me-ghee — RIGHT (direction) — me? Ghee is to the right",
  "みず": "Me-zoo — WATER — Ms. Zoo needs water",
  "みせ": "Me-say — SHOP/STORE — me say, nice shop!",
  "みそ": "Me-so — MISO — me so hungry for miso",
  "みち": "Me-chi — ROAD/PATH — Mitchi walks the road",
  "みな": "Me-na — EVERYONE — mean-a everyone is included",
  "みみ": "Me-me — EAR — me-me, I hear with my ears",
  "みる": "Me-roo — TO LOOK/SEE — mirror to see yourself",
  "みん": "Min — PEOPLE — min(ute) people everywhere",
  "むぎ": "Moo-ghee — WHEAT/BARLEY — moo-ghee wheat porridge",
  "むく": "Moo-koo — TO PEEL — moo-cow, peel the banana",
  "むし": "Moo-she — INSECT/BUG — mushy insect, squished bug",
  "むす": "Moo-sue — TO STEAM — moose stew, steamed",
  "むね": "Moo-nay — CHEST/HEART — money in the chest",
  "むら": "Moo-ra — VILLAGE — mural in the village",
  "むり": "Moo-ree — IMPOSSIBLE — mooring is impossible in the storm",
  "め": "Meh — EYE — meh, close your eyes",
  "めい": "May — NAME/FAMOUS — May is a famous name",
  "めし": "Meh-she — MEAL/RICE — meshy rice meal",
  "めん": "Men — NOODLES/MASK — men eat ramen noodles in masks",
  "もう": "Moh — ALREADY/MORE — mo! Already? More!",
  "もし": "Mo-she — IF — moshi moshi, if you\'re calling",
  "もち": "Mo-chi — RICE CAKE — mochi! Yummy rice cake",
  "もつ": "Mo-tsu — TO HOLD/HAVE — mots (words) you hold",
  "もと": "Mo-to — ORIGIN/BASE — moto (motorcycle) at the base",
  "もの": "Mo-no — THING — mono thing, single item",
  "もも": "Mo-mo — THIGH/PEACH — momo peachy thigh",
  "もり": "Mo-ree — FOREST — more trees in the forest",
  "もる": "Mo-roo — TO SERVE/HEAP — more food! Heap it on!",
  "もん": "Mon — GATE/QUESTION — mon dieu! Question at the gate",
  "やき": "Ya-key — POTTERY/GRILLING — Yankee grilling yakitori",
  "やぎ": "Ya-ghee — GOAT — yay! A goat!",
  "やく": "Ya-koo — ABOUT/ROLE — yakuza role, about that life",
  "やね": "Ya-nay — ROOF — yawn on the roof",
  "やま": "Ya-ma — MOUNTAIN — yah-ma! Big mountain!",
  "やみ": "Ya-me — DARKNESS — yummy darkness of night",
  "やる": "Ya-roo — TO DO — yarr! Do it, pirate!",
  "ゆえ": "You-eh — REASON/CAUSE — you, eh? That\'s the reason?",
  "ゆか": "You-ka — FLOOR — Yuka swept the floor",
  "ゆき": "You-key — SNOW — you-key to the snow slopes",
  "ゆげ": "You-gay — STEAM — you get steamed up",
  "ゆび": "You-bee — FINGER — you be pointing that finger",
  "ゆみ": "You-me — BOW (archery) — you and me, bow and arrow",
  "ゆめ": "You-may — DREAM — you may dream tonight",
  "よう": "Yoh — WAY/BUSINESS — yo! What way? What\'s the business?",
  "よく": "Yo-koo — OFTEN/WELL — yokel does well, often",
  "よこ": "Yo-ko — SIDE/HORIZONTAL — Yoko Ono, side character",
  "よぶ": "Yo-boo — TO CALL — yo boo! I\'m calling you!",
  "よむ": "Yo-moo — TO READ — yo mama reads a lot",
  "よめ": "Yo-may — BRIDE/WIFE — yo, may I have this bride?",
  "よる": "Yo-roo — NIGHT — your night is young",
  "よん": "Yon — FOUR — yonder, four sheep",
  "らく": "Ra-koo — COMFORTABLE/EASY — raccoon is comfortable and easy",
  "りく": "Ree-koo — LAND — recon the land",
  "りつ": "Ree-tsu — RATE — ritz hotel rate",
  "るす": "Roo-sue — ABSENCE FROM HOME — ruse to be away from home",
  "れい": "Ray — ZERO/BOW/EXAMPLE — ray of light: zero, bow, example",
  "ろく": "Ro-koo — SIX — rock and roll, six strings",
  "わき": "Wa-key — SIDE/ARMPIT — wacky armpit on the side",
  "わく": "Wa-koo — FRAME — wacko frame on the wall",
  "わけ": "Wa-kay — REASON — wake up! That\'s the reason!",
  "わざ": "Wa-za — SKILL/TECHNIQUE — waza! Kung fu technique",
  "わし": "Wa-she — EAGLE — washy eagle soaring",
  "わた": "Wa-ta — COTTON — water on cotton",
  "わに": "Wa-nee — CROCODILE — want a knee? Crocodile snaps it",
  "わる": "Wa-roo — TO BREAK/SPLIT — war ruins and breaks everything",
  "われ": "Wa-ray — I/WE — warrior says \'I/we fight!\'",
  "わん": "Wan — BAY/BOWL — wand waves over the bay bowl",
  "パン": "Pan — BREAD — pan (French for bread)",
  "だいがく": "Die-ga-koo — big UNIVERSITY of learning",
  "こうこう": "Ko-ko — HIGH SCHOOL cocoa break",
  "がくせい": "Gaku-say — STUDENT of learning says gaku!",
  "だいがくせい": "Die-gaku-say — big university COLLEGE STUDENT",
  "りゅうがくせい": "Ryu-gaku-say — dragon INTERNATIONAL STUDENT abroad",
  "だいがくいんせい": "Die-gaku-in-say — GRAD STUDENT in the big university",
  "せんせい": "Sen-say — TEACHER says it all, sensei!",
  "いちねんせい": "Itchy-nen-say — FIRST YEAR STUDENT is itchy and new",
  "せんこう": "Sen-ko — MAJOR in a thousand lights",
  "ともだち": "Tomo-dachi — FRIEND to match with",
  "にほんじん": "Nihon-jin — JAPANESE PERSON from the land of the sun",
  "にほんご": "Nihon-go — JAPANESE LANGUAGE, go speak it!",
  "えいご": "A-go — ENGLISH LANGUAGE, eh go figure",
  "にほん": "Nihon — JAPAN, the sun origin",
  "かんこく": "Kan-koku — KOREA, can cook Korean BBQ",
  "ちゅうごく": "Choo-goku — CHINA, choo-choo train to China",
  "ごぜん": "Go-zen — A.M. go zen in the morning",
  "ばんごう": "Ban-go — NUMBER sequence, ban and go count them",
  "そうです": "So-dess — THAT'S RIGHT, so it is!",
  "そうですか": "So-deska — IS THAT SO? So, desk, huh?",
  "あのう": "Ah-no — UM, excuse me, ah no...",
  "いちじ": "Itchy-ji — ONE O'CLOCK, itchy at 1",
  "にじ": "Nee-ji — TWO O'CLOCK, knee hurts at 2",
  "さんじ": "San-ji — THREE O'CLOCK, Mr. San arrives at 3",
  "よじ": "Yo-ji — FOUR O'CLOCK, yo! It's 4!",
  "ごじ": "Go-ji — FIVE O'CLOCK, go home at 5!",
  "ろくじ": "Roku-ji — SIX O'CLOCK, rock out at 6",
  "しちじ": "Shichi-ji — SEVEN O'CLOCK, she's itchy at 7",
  "はちじ": "Hachi-ji — EIGHT O'CLOCK, Hachi the dog waits at 8",
  "くじ": "Koo-ji — NINE O'CLOCK, cozy at 9",
  "じゅうじ": "Joo-ji — TEN O'CLOCK, juice at 10",
  "じゅういちじ": "Joo-itchy-ji — ELEVEN O'CLOCK, itchy juice at 11",
  "じゅうにじ": "Joo-nee-ji — TWELVE O'CLOCK, noon juice at 12",
  "きゅう": "Kyoo — NINE, cute number 9",
};



// Firebase Realtime Database persistence
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBR50TCbSjrSSJHkX3-kswLNts8xNflvnU",
  authDomain: "jp-drill.firebaseapp.com",
  databaseURL: "https://jp-drill-default-rtdb.firebaseio.com",
  projectId: "jp-drill",
  storageBucket: "jp-drill.firebasestorage.app",
  messagingSenderId: "964136605311",
  appId: "1:964136605311:web:57342e31d08d13fa7d914a",
};
const fbApp = initializeApp(firebaseConfig);
const db = getDatabase(fbApp);

const USERS = [
  { id: "jeremy", name: "Jeremy", icon: "🎌" },
  { id: "owen", name: "Owen", icon: "⚡" },
  { id: "layton", name: "Layton", icon: "🔥" },
  { id: "christian", name: "Christian", icon: "🌊" },
];
const BASE_SK = "jp2c-v1";

// Cloud load/save
async function fbLoad(path) {
  try {
    const snap = await get(ref(db, path));
    return snap.exists() ? snap.val() : null;
  } catch(e) { console.error("fbLoad error:", e); return null; }
}
async function fbSave(path, data) {
  try {
    await set(ref(db, path), data);
    return true;
  } catch(e) { console.error("fbSave error:", e); return false; }
}

// Local fallback
function localLoad(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch { return null; } }
function localSave(k, d) { try { localStorage.setItem(k, JSON.stringify(d)); } catch {} }

function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[b[i],b[r]]=[b[r],b[i]];} return b; }

export default function App() {
  // User selection
  const [user, setUser] = useState(null);
  const sk = user ? `${BASE_SK}-${user.id}` : BASE_SK;

  const [screen, setScreen] = useState("home");
  const [grades, setGrades] = useState({});
  const [speedRuns, setSpeedRuns] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [chunkIdx, setChunkIdx] = useState(0);
  const [catId, setCatId] = useState(null);
  const [showCats, setShowCats] = useState(false);
  const [showGenki, setShowGenki] = useState(false);
  const [words, setWords] = useState([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [results, setResults] = useState([]);
  const [drillMode, setDrillMode] = useState("all");
  const [reverse, setReverse] = useState(false);
  const [speedStart, setSpeedStart] = useState(null);
  const [speedMs, setSpeedMs] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  // Load user data when user is selected
  useEffect(() => {
    if(!user) { setLoaded(false); return; }
    (async () => {
      const fbPath = `users/${user.id}`;
      let g = await fbLoad(`${fbPath}/grades`);
      let s = await fbLoad(`${fbPath}/speedRuns`);
      const localG = localLoad(sk+"-g") || {};
      const localS = localLoad(sk+"-s") || [];
      
      // Migration: if Firebase empty but localStorage has data, push it up
      if(!g && Object.keys(localG).length > 0) {
        g = localG;
        await fbSave(`${fbPath}/grades`, g);
        console.log("Migrated grades to Firebase:", Object.keys(g).length, "entries");
      }
      if(!s && localS.length > 0) {
        s = localS;
        await fbSave(`${fbPath}/speedRuns`, s);
        console.log("Migrated speed runs to Firebase:", s.length, "entries");
      }
      
      if(!g) g = localG;
      if(!s) s = localS;
      setGrades(g); setSpeedRuns(s); setLoaded(true);
    })();
  }, [user, sk]);

  // Check for last used user
  useEffect(() => {
    const lastId = localLoad("jp2c-last-user");
    if(lastId) {
      const found = USERS.find(u => u.id === lastId);
      if(found) setUser(found);
    }
  }, []);

  const selectUser = (u) => {
    setUser(u);
    localSave("jp2c-last-user", u.id);
    setScreen("home");
  };

  const switchUser = () => {
    setUser(null);
    setLoaded(false);
    setScreen("home");
    setGrades({});
    setSpeedRuns([]);
  };

  useEffect(() => {
    if(running) { timerRef.current = setInterval(()=>setSpeedMs(Date.now()-speedStart), 100); }
    return () => clearInterval(timerRef.current);
  }, [running, speedStart]);

  const grKey = (w) => reverse ? "r:"+w.j : w.j;
  const gr = (w) => grades[grKey(w)] || "ungraded";
  const reviewWords = () => {
    const all = [];
    CHUNKS.forEach(c => c.words.forEach(w => { if(gr(w)==="know") all.push(w); }));
    return all;
  };

  const startDrill = (ci, mode, catWords) => {
    let wl;
    if(mode==="review") { wl=reviewWords(); }
    else if(catWords) { wl=catWords; if(mode==="gaps") wl=wl.filter(w=>gr(w)!=="know"); }
    else { wl=CHUNKS[ci].words; if(mode==="gaps") wl=wl.filter(w=>gr(w)!=="know"); }
    if(!wl.length) return;
    setChunkIdx(ci); setDrillMode(mode);
    setWords(shuffle(wl)); setIdx(0); setRevealed(false); setShowHint(false); setResults([]);
    setScreen("drill");
  };

  const startSpeed = (ci, mode, catWords) => {
    let wl;
    if(mode==="review") { wl=reviewWords(); }
    else if(catWords) { wl=catWords; }
    else { wl=CHUNKS[ci].words; }
    if(!wl.length) return;
    setChunkIdx(ci); setDrillMode(mode);
    setWords(shuffle(wl)); setIdx(0); setSpeedMs(0); setSpeedStart(null); setRunning(false);
    setScreen("speed");
  };

  const handleGrade = (grade) => {
    const w = words[idx];
    const ng = {...grades, [grKey(w)]: grade};
    setGrades(ng);
    localSave(sk+"-g", ng);
    if(user) fbSave(`users/${user.id}/grades`, ng);
    const nr = [...results, {w, grade}]; setResults(nr);
    if(idx < words.length-1) { setIdx(idx+1); setRevealed(false); setShowHint(false); }
    else setScreen("results");
  };

  const speedNext = () => {
    if(!running) { setSpeedStart(Date.now()); setRunning(true); }
    if(idx < words.length-1) { setIdx(idx+1); }
    else {
      setRunning(false); clearInterval(timerRef.current);
      const elapsed = Date.now() - speedStart; setSpeedMs(elapsed);
      const label = drillMode==="review" ? "Review" : CHUNKS[chunkIdx].name;
      const ns = [...speedRuns, {date:new Date().toISOString(), label, words:words.length, ms:elapsed}];
      setSpeedRuns(ns); localSave(sk+"-s", ns);
      if(user) fbSave(`users/${user.id}/speedRuns`, ns);
      setScreen("speed-done");
    }
  };

  const fmt = (ms) => {
    const s = Math.floor(ms/1000);
    return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}.${Math.floor((ms%1000)/100)}`;
  };

  const resetAll = () => {
    if(confirm("Reset ALL grades and speed runs?")) {
      setGrades({}); setSpeedRuns([]);
      localSave(sk+"-g", {}); localSave(sk+"-s", []);
      if(user) { fbSave(`users/${user.id}/grades`, {}); fbSave(`users/${user.id}/speedRuns`, []); }
    }
  };

  // ── USER SELECT ──
  if(!user) {
    return (
      <div style={S.page}>
        <h1 style={S.logo}>2文字マスター</h1>
        <p style={{...S.sub, marginBottom:24}}>Who's studying?</p>
        {USERS.map(u => {
          const userGrades = localLoad(`${BASE_SK}-${u.id}-g`) || {};
          const known = Object.values(userGrades).filter(v=>v==="know").length;
          return (
            <button key={u.id} onClick={()=>selectUser(u)} style={{
              ...S.card, cursor:"pointer", display:"flex", alignItems:"center", gap:12,
              border:"1px solid #334155", transition:"all 0.15s",
            }}>
              <span style={{fontSize:32}}>{u.icon}</span>
              <div style={{flex:1,textAlign:"left"}}>
                <div style={{fontSize:16,fontWeight:700}}>{u.name}</div>
                <div style={S.dim}>{known > 0 ? `${known}/424 mastered` : "Not started"}</div>
              </div>
              <span style={{color:"#334155",fontSize:20}}>→</span>
            </button>
          );
        })}
      </div>
    );
  }

  if(!loaded) return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0f172a"}}>
      <p style={{color:"#94a3b8",fontSize:20}}>読み込み中...</p>
    </div>
  );

  // ── HOME ──
  if(screen === "home") {
    const totalWords = CHUNKS.reduce((s,c) => s+c.words.length, 0);
    const knownCount = reviewWords().length;
    const remaining = totalWords - knownCount;

    return (
      <div style={S.page}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:4}}>
          <h1 style={S.logo}>2文字マスター</h1>
          <button onClick={switchUser} style={{...S.back,display:"flex",alignItems:"center",gap:4,fontSize:12}}>
            <span>{user.icon}</span> {user.name} ▾
          </button>
        </div>
        <p style={S.sub}>424 Words — {reverse ? "English → Japanese" : "Japanese → English"}</p>

        <div style={{display:"flex",gap:0,marginBottom:12,borderRadius:8,overflow:"hidden",border:"1px solid #334155"}}>
          <button onClick={()=>setReverse(false)} style={{padding:"8px 16px",fontSize:13,fontWeight:600,border:"none",cursor:"pointer",flex:1,background:!reverse?"#1d4ed8":"#1e293b",color:!reverse?"white":"#64748b"}}>🇯🇵 → 🇬🇧</button>
          <button onClick={()=>setReverse(true)} style={{padding:"8px 16px",fontSize:13,fontWeight:600,border:"none",cursor:"pointer",flex:1,background:reverse?"#1d4ed8":"#1e293b",color:reverse?"white":"#64748b"}}>🇬🇧 → 🇯🇵</button>
        </div>

        <div style={S.card}>
          <div style={S.row}>
            <span style={S.dim}>2文字 Mastered</span>
            <span style={S.bright}>{knownCount}/{totalWords} ({Math.round(knownCount/totalWords*100)}%)</span>
          </div>
          <div style={S.bar}><div style={{...S.fill, width:`${knownCount/totalWords*100}%`}}/></div>
          <div style={{...S.row, marginTop:6}}><span style={S.dim}>{remaining} words remaining</span></div>
        </div>

        {(() => {
          const genkiAll = GENKI_LESSONS.flatMap(l => l.words);
          const genkiTotal = genkiAll.length;
          const genkiKnown = genkiAll.filter(w => gr(w)==="know").length;
          return genkiTotal > 0 ? (
            <div style={{...S.card, borderColor:"#6d28d9"}}>
              <div style={S.row}>
                <span style={S.dim}>📖 Genki Mastered</span>
                <span style={{color:"#c4b5fd",fontWeight:700}}>{genkiKnown}/{genkiTotal} ({Math.round(genkiKnown/genkiTotal*100)}%)</span>
              </div>
              <div style={S.bar}><div style={{...S.fill, width:`${genkiKnown/genkiTotal*100}%`, background:"#7c3aed"}}/></div>
              <div style={{...S.row, marginTop:6}}><span style={S.dim}>{genkiTotal-genkiKnown} words remaining</span></div>
            </div>
          ) : null;
        })()}

        {knownCount > 0 && (
          <div style={{...S.card, borderColor:"#166534"}}>
            <div style={S.row}>
              <span style={{fontSize:22}}>✅</span>
              <div style={{flex:1}}>
                <div style={S.bname}>Review Bucket</div>
                <div style={S.dim}>{knownCount} mastered words</div>
              </div>
            </div>
            <div style={{display:"flex",gap:6,marginTop:8}}>
              <button style={{...S.ab,...S.abg}} onClick={()=>startDrill(0,"review")}>📝 Review</button>
              <button style={{...S.ab,...S.abb}} onClick={()=>startSpeed(0,"review")}>⚡ Speed Run</button>
            </div>
          </div>
        )}

        {/* Categories */}
        <div style={{width:"100%",marginBottom:12}}>
          <button onClick={()=>setShowCats(!showCats)} style={{background:"none",border:"none",color:"#94a3b8",fontSize:14,fontWeight:700,cursor:"pointer",padding:"8px 0",width:"100%",textAlign:"left"}}>
            🏷️ Categories {showCats ? "▾" : "▸"}
          </button>
          {showCats && CATEGORIES.map(cat => {
            const wl = cat.wordObjs;
            const total = wl.length;
            const known = wl.filter(w=>gr(w)==="know").length;
            const gaps = total - known;
            const pct = Math.round(known/total*100);
            return (
              <div key={cat.id} style={{...S.card,padding:10,marginBottom:8}}>
                <div style={S.row}>
                  <span style={{fontSize:18}}>{cat.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14,fontWeight:700}}>{cat.name}</div>
                    <div style={S.dim}>{total} words · {pct}% mastered</div>
                  </div>
                </div>
                <div style={{...S.minibar,marginTop:6}}><div style={{...S.minifill,width:`${pct}%`}}/></div>
                <div style={{display:"flex",gap:6,marginTop:6}}>
                  <button style={{...S.ab,fontSize:11,padding:"5px 8px"}} onClick={()=>startDrill(0,"all",wl)}>📝 All</button>
                  <button style={{...S.ab,...S.abr,fontSize:11,padding:"5px 8px"}} onClick={()=>startDrill(0,"gaps",wl)}>🔥 Gaps ({gaps})</button>
                  <button style={{...S.ab,...S.abb,fontSize:11,padding:"5px 8px"}} onClick={()=>startSpeed(0,"all",wl)}>⚡ Speed</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Genki Textbook */}
        <div style={{width:"100%",marginBottom:12}}>
          <button onClick={()=>setShowGenki(!showGenki)} style={{background:"none",border:"none",color:"#94a3b8",fontSize:14,fontWeight:700,cursor:"pointer",padding:"8px 0",width:"100%",textAlign:"left"}}>
            📖 Genki {showGenki ? "▾" : "▸"}
          </button>
          {showGenki && GENKI_LESSONS.map(lesson => {
            const wl = lesson.words;
            const total = wl.length;
            const known = wl.filter(w=>gr(w)==="know").length;
            const gaps = total - known;
            const pct = Math.round(known/total*100);
            return (
              <div key={lesson.id} style={{...S.card,padding:10,marginBottom:8}}>
                <div style={S.row}>
                  <span style={{fontSize:18}}>📖</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14,fontWeight:700}}>{lesson.book} — {lesson.name}</div>
                    <div style={S.dim}>{total} words · {pct}% mastered</div>
                  </div>
                </div>
                <div style={{...S.minibar,marginTop:6}}><div style={{...S.minifill,width:`${pct}%`}}/></div>
                <div style={{display:"flex",gap:6,marginTop:6}}>
                  <button style={{...S.ab,fontSize:11,padding:"5px 8px"}} onClick={()=>startDrill(0,"all",wl)}>📝 All</button>
                  <button style={{...S.ab,...S.abr,fontSize:11,padding:"5px 8px"}} onClick={()=>startDrill(0,"gaps",wl)}>🔥 Gaps ({gaps})</button>
                  <button style={{...S.ab,...S.abb,fontSize:11,padding:"5px 8px"}} onClick={()=>startSpeed(0,"all",wl)}>⚡ Speed</button>
                </div>
              </div>
            );
          })}
        </div>

        {CHUNKS.map((chunk, ci) => {
          const total = chunk.words.length;
          const known = chunk.words.filter(w=>gr(w)==="know").length;
          const shaky = chunk.words.filter(w=>gr(w)==="shaky").length;
          const dont = chunk.words.filter(w=>gr(w)==="dont-know").length;
          const ungraded = total-known-shaky-dont;
          const gaps = total-known;
          const pct = Math.round(known/total*100);
          return (
            <div key={ci} style={S.card}>
              <div style={S.row}>
                <span style={{fontSize:20,fontWeight:800,color:"#38bdf8",minWidth:28}}>{ci+1}</span>
                <div style={{flex:1}}>
                  <div style={S.bname}>{chunk.name}</div>
                  <div style={S.dim}>{chunk.range} · {total} words</div>
                </div>
                <span style={S.pct}>{pct}%</span>
              </div>
              <div style={{...S.minibar,marginTop:8}}><div style={{...S.minifill,width:`${pct}%`}}/></div>
              <div style={{...S.row,marginTop:6,gap:12}}>
                <span style={{color:"#22c55e",fontSize:12,fontWeight:700}}>✓{known}</span>
                <span style={{color:"#f59e0b",fontSize:12,fontWeight:700}}>~{shaky}</span>
                <span style={{color:"#ef4444",fontSize:12,fontWeight:700}}>✗{dont}</span>
                <span style={{color:"#64748b",fontSize:12}}>?{ungraded}</span>
              </div>
              <div style={{display:"flex",gap:6,marginTop:8}}>
                <button style={S.ab} onClick={()=>startDrill(ci,"all")}>📝 Test All</button>
                <button style={{...S.ab,...S.abr}} onClick={()=>startDrill(ci,"gaps")}>🔥 Gaps ({gaps})</button>
                <button style={{...S.ab,...S.abb}} onClick={()=>startSpeed(ci,"all")}>⚡ Speed</button>
              </div>
            </div>
          );
        })}


        {speedRuns.length > 0 && (
          <div style={S.card}>
            <div style={S.dim}>Recent Speed Runs</div>
            {speedRuns.slice(-5).reverse().map((r,i) => (
              <div key={i} style={{...S.row,padding:"4px 0",borderBottom:"1px solid #1e293b"}}>
                <span style={S.dim}>{r.label} ({r.words}w)</span>
                <span style={S.bright}>{fmt(r.ms)}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{fontSize:11,color:"#22c55e",marginTop:8,marginBottom:4}}>☁️ Cloud sync active</div>
        <button style={S.reset} onClick={resetAll}>Reset All Data</button>
      </div>
    );
  }

  // ── DRILL ──
  if(screen === "drill") {
    const w = words[idx]; const prev = gr(w);
    return (
      <div style={S.page}>
        <div style={S.topbar}>
          <button style={S.back} onClick={()=>setScreen("home")}>← Back</button>
          <span style={S.dim}>{idx+1}/{words.length}</span>
          <span style={S.dim}>{drillMode==="review"?"✅ Review":CHUNKS[chunkIdx]?.name}</span>
        </div>
        <div style={S.prog}><div style={{...S.progfill,width:`${(idx+1)/words.length*100}%`}}/></div>
        {prev !== "ungraded" && (
          <div style={{...S.badge,
            background:prev==="know"?"#14532d":prev==="shaky"?"#78350f":"#7f1d1d",
            color:prev==="know"?"#86efac":prev==="shaky"?"#fde68a":"#fca5a5"
          }}>
            Prev: {prev==="know"?"✓ Known":prev==="shaky"?"~ Shaky":"✗ Unknown"}
          </div>
        )}
        <div onClick={()=>!revealed&&setRevealed(true)} style={{
          ...S.wcard,
          cursor:!revealed?"pointer":"default",
          border:!revealed?"3px dashed #334155":"3px solid transparent"
        }}>
          {!reverse ? (
            <>
              <div style={S.jp}>{w.j}</div>
              <div style={S.kanji}>{w.k}</div>
              {!revealed && <div style={S.hint}>Tap to reveal</div>}
              {revealed && <div style={S.en}>{w.e}</div>}
            </>
          ) : (
            <>
              <div style={S.en}>{w.e}</div>
              {!revealed && <div style={S.hint}>Tap to reveal</div>}
              {revealed && <><div style={S.jp}>{w.j}</div><div style={S.kanji}>{w.k}</div></>}
            </>
          )}
        </div>
        {revealed && (
          <div style={S.grades}>
            <button style={S.gk} onClick={()=>handleGrade("know")}>✓ Know</button>
            <button style={S.gs} onClick={()=>handleGrade("shaky")}>~ Shaky</button>
            <button style={S.gd} onClick={()=>handleGrade("dont-know")}>✗ No</button>
          </div>
        )}
        {revealed && MNEMONICS[w.j] && (
          <div style={{marginTop:8,textAlign:"center"}}>
            {!showHint ? (
              <button onClick={()=>setShowHint(true)} style={{background:"none",border:"1px solid #334155",color:"#94a3b8",borderRadius:8,padding:"6px 16px",fontSize:13,cursor:"pointer"}}>💡 Memory Trick</button>
            ) : (
              <div style={{background:"#1e293b",borderRadius:10,padding:"10px 14px",fontSize:14,color:"#fde68a",lineHeight:1.5,fontStyle:"italic"}}>{MNEMONICS[w.j]}</div>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── SPEED ──
  if(screen === "speed") {
    const w = words[idx];
    return (
      <div style={S.page}>
        <div style={S.topbar}>
          <button style={S.back} onClick={()=>{setRunning(false);clearInterval(timerRef.current);setScreen("home");}}>← Back</button>
          <span style={S.dim}>{idx+1}/{words.length}</span>
        </div>
        <div style={S.timer}>{running ? fmt(speedMs) : "Ready"}</div>
        <div style={S.prog}><div style={{...S.progfill,width:`${(idx+1)/words.length*100}%`,background:"#3b82f6"}}/></div>
        <div style={S.sjp} onClick={speedNext}>{!reverse ? w.j : w.e}</div>
        {!reverse && <div style={S.skanji}>{w.k}</div>}
        <div style={S.hint}>{!running ? "Tap to start" : !reverse ? "Read aloud → tap next" : "Think of the Japanese → tap next"}</div>
        <button style={S.snext} onClick={speedNext}>
          {!running ? "▶ Start" : idx < words.length-1 ? "Next →" : "Finish ✓"}
        </button>
      </div>
    );
  }

  // ── SPEED DONE ──
  if(screen === "speed-done") {
    const pace = (speedMs/words.length/1000).toFixed(1);
    return (
      <div style={S.page}>
        <div style={{fontSize:48,marginTop:20}}>⚡</div>
        <h2 style={S.rh}>Speed Run Complete!</h2>
        <div style={S.srow}>
          <div style={S.sbox}><div style={S.dim}>Time</div><div style={S.sv}>{fmt(speedMs)}</div></div>
          <div style={S.sbox}><div style={S.dim}>Words</div><div style={S.sv}>{words.length}</div></div>
          <div style={S.sbox}><div style={S.dim}>Pace</div><div style={S.sv}>{pace}s</div></div>
        </div>
        <button style={S.snext} onClick={()=>startSpeed(chunkIdx,drillMode)}>⚡ Again</button>
        <button style={{...S.back,marginTop:8}} onClick={()=>setScreen("home")}>← Home</button>
      </div>
    );
  }

  // ── RESULTS ──
  if(screen === "results") {
    const k = results.filter(r=>r.grade==="know").length;
    const s = results.filter(r=>r.grade==="shaky").length;
    const d = results.filter(r=>r.grade==="dont-know").length;
    const t = results.length;
    const p = Math.round(k/t*100);
    return (
      <div style={S.page}>
        <div style={{fontSize:48,marginTop:20}}>{p>=80?"🎉":p>=50?"💪":"📚"}</div>
        <h2 style={S.rh}>Session Complete!</h2>
        <div style={S.score}>{p}%</div>
        <div style={S.dim}>{k} known / {t} words</div>
        <div style={{display:"flex",gap:10,margin:"16px 0",width:"100%"}}>
          <div style={{...S.rstat,borderLeft:"4px solid #22c55e"}}><div style={S.rsn}>{k}</div><div style={S.dim}>Know</div></div>
          <div style={{...S.rstat,borderLeft:"4px solid #f59e0b"}}><div style={S.rsn}>{s}</div><div style={S.dim}>Shaky</div></div>
          <div style={{...S.rstat,borderLeft:"4px solid #ef4444"}}><div style={S.rsn}>{d}</div><div style={S.dim}>Don't Know</div></div>
        </div>
        {(s+d) > 0 && (
          <div style={{...S.card, maxHeight:280, overflowY:"auto"}}>
            <div style={S.dim}>Words to Review</div>
            {results.filter(r=>r.grade!=="know").map((r,i) => (
              <div key={i} style={{...S.row,padding:"6px 0",borderBottom:"1px solid #1e293b"}}>
                <span style={{fontSize:20,fontWeight:700,minWidth:60}}>{r.w.j}</span>
                <span style={{fontSize:13,color:"#64748b",minWidth:40}}>{r.w.k}</span>
                <span style={{...S.dim,flex:1}}>{r.w.e}</span>
                <span style={{padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,
                  background:r.grade==="shaky"?"#78350f":"#7f1d1d",
                  color:r.grade==="shaky"?"#fde68a":"#fca5a5"}}>{r.grade==="shaky"?"~":"✗"}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:300,marginTop:12}}>
          {(s+d)>0 && <button style={S.rbtn} onClick={()=>startDrill(chunkIdx,drillMode==="review"?"review":"gaps")}>🔥 Drill Gaps Only</button>}
          <button style={S.snext} onClick={()=>startDrill(chunkIdx,drillMode)}>📝 Again</button>
          <button style={{...S.back,width:"100%"}} onClick={()=>setScreen("home")}>← Home</button>
        </div>
      </div>
    );
  }

  return null;
}

const S = {
  page:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",padding:"16px",fontFamily:"'Noto Sans JP',system-ui,sans-serif",background:"#0f172a",color:"#e2e8f0",maxWidth:560,margin:"0 auto"},
  logo:{fontSize:28,fontWeight:800,margin:0,background:"linear-gradient(135deg,#38bdf8,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},
  sub:{fontSize:13,color:"#64748b",margin:"2px 0 16px"},
  card:{width:"100%",background:"#1e293b",borderRadius:12,padding:14,marginBottom:12,border:"1px solid #334155"},
  row:{display:"flex",alignItems:"center",gap:10},
  dim:{fontSize:12,color:"#94a3b8"},
  bright:{fontSize:13,fontWeight:600,color:"#e2e8f0"},
  bar:{width:"100%",height:8,background:"#334155",borderRadius:4,overflow:"hidden",marginTop:6},
  fill:{height:"100%",background:"#22c55e",borderRadius:4,transition:"width 0.5s"},
  bname:{fontSize:16,fontWeight:700},
  pct:{marginLeft:"auto",fontSize:22,fontWeight:800,color:"#38bdf8"},
  minibar:{width:"100%",height:4,background:"#334155",borderRadius:2,overflow:"hidden"},
  minifill:{height:"100%",background:"#22c55e",borderRadius:2,transition:"width 0.3s"},
  ab:{padding:"6px 10px",fontSize:12,fontWeight:600,background:"#334155",color:"#e2e8f0",border:"none",borderRadius:6,cursor:"pointer",flex:1,textAlign:"center"},
  abr:{background:"#7f1d1d",color:"#fca5a5"},
  abb:{background:"#1e3a5f",color:"#93c5fd"},
  abg:{background:"#14532d",color:"#86efac"},
  topbar:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:10},
  back:{padding:"6px 12px",fontSize:13,background:"transparent",color:"#94a3b8",border:"1px solid #334155",borderRadius:8,cursor:"pointer"},
  prog:{width:"100%",height:3,background:"#334155",borderRadius:2,overflow:"hidden",marginBottom:16},
  progfill:{height:"100%",background:"#22c55e",borderRadius:2,transition:"width 0.3s"},
  badge:{padding:"3px 10px",borderRadius:10,fontSize:11,fontWeight:600,marginBottom:12},
  wcard:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,padding:"32px 16px",borderRadius:14,background:"#1e293b",width:"100%",minHeight:220,marginBottom:20,transition:"all 0.2s"},
  jp:{fontSize:80,fontWeight:700,color:"#f1f5f9",fontFamily:"'Noto Sans JP',sans-serif",lineHeight:1.1},
  kanji:{fontSize:22,color:"#475569",fontFamily:"'Noto Sans JP',sans-serif",marginTop:2},
  hint:{fontSize:14,color:"#475569",fontStyle:"italic",marginTop:8},
  en:{fontSize:24,color:"#94a3b8",fontWeight:500,marginTop:12},
  grades:{display:"flex",gap:8,width:"100%",justifyContent:"center",marginBottom:16},
  gk:{padding:"14px 16px",fontSize:16,fontWeight:700,background:"#166534",color:"#bbf7d0",border:"none",borderRadius:10,cursor:"pointer",flex:1,maxWidth:130},
  gs:{padding:"14px 16px",fontSize:16,fontWeight:700,background:"#78350f",color:"#fde68a",border:"none",borderRadius:10,cursor:"pointer",flex:1,maxWidth:130},
  gd:{padding:"14px 16px",fontSize:16,fontWeight:700,background:"#7f1d1d",color:"#fecaca",border:"none",borderRadius:10,cursor:"pointer",flex:1,maxWidth:130},
  timer:{fontSize:44,fontWeight:800,color:"#38bdf8",fontFamily:"monospace",marginBottom:8},
  sjp:{fontSize:110,fontWeight:700,color:"#f1f5f9",fontFamily:"'Noto Sans JP',sans-serif",padding:"20px 16px",cursor:"pointer",userSelect:"none",textAlign:"center",lineHeight:1.1},
  skanji:{fontSize:24,color:"#475569",fontFamily:"'Noto Sans JP',sans-serif",marginBottom:8},
  snext:{padding:"14px 32px",fontSize:16,fontWeight:700,background:"#1d4ed8",color:"white",border:"none",borderRadius:10,cursor:"pointer",marginTop:8,width:"100%",maxWidth:300},
  rh:{fontSize:22,fontWeight:800,margin:"8px 0"},
  score:{fontSize:56,fontWeight:800,background:"linear-gradient(135deg,#38bdf8,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},
  rstat:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:10,background:"#1e293b",borderRadius:8},
  rsn:{fontSize:24,fontWeight:800},
  rbtn:{padding:"14px 28px",fontSize:15,fontWeight:700,background:"#dc2626",color:"white",border:"none",borderRadius:10,cursor:"pointer",width:"100%"},
  srow:{display:"flex",gap:12,margin:"16px 0"},
  sbox:{display:"flex",flexDirection:"column",alignItems:"center",padding:"12px 20px",background:"#1e293b",borderRadius:10},
  sv:{fontSize:22,fontWeight:800,color:"#38bdf8"},
  reset:{marginTop:4,padding:"6px 14px",fontSize:11,background:"transparent",color:"#475569",border:"1px solid #334155",borderRadius:6,cursor:"pointer",marginBottom:20},
};
