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


// localStorage persistence - works on real hosted sites
const SK = "jp2c-v1";
function load(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch { return null; } }
function save(k, d) { try { localStorage.setItem(k, JSON.stringify(d)); return true; } catch { return false; } }
function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[b[i],b[r]]=[b[r],b[i]];} return b; }

export default function App() {
  const [screen, setScreen] = useState("home");
  const [grades, setGrades] = useState({});
  const [speedRuns, setSpeedRuns] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [chunkIdx, setChunkIdx] = useState(0);
  const [words, setWords] = useState([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState([]);
  const [drillMode, setDrillMode] = useState("all");
  const [speedStart, setSpeedStart] = useState(null);
  const [speedMs, setSpeedMs] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const g = load(SK+"-g") || {};
    const s = load(SK+"-s") || [];
    setGrades(g); setSpeedRuns(s); setLoaded(true);
  }, []);

  useEffect(() => {
    if(running) { timerRef.current = setInterval(()=>setSpeedMs(Date.now()-speedStart), 100); }
    return () => clearInterval(timerRef.current);
  }, [running, speedStart]);

  const gr = (w) => grades[w.j] || "ungraded";
  const reviewWords = () => {
    const all = [];
    CHUNKS.forEach(c => c.words.forEach(w => { if(gr(w)==="know") all.push(w); }));
    return all;
  };

  const startDrill = (ci, mode) => {
    let wl;
    if(mode==="review") { wl=reviewWords(); }
    else { wl=CHUNKS[ci].words; if(mode==="gaps") wl=wl.filter(w=>gr(w)!=="know"); }
    if(!wl.length) return;
    setChunkIdx(ci); setDrillMode(mode);
    setWords(shuffle(wl)); setIdx(0); setRevealed(false); setResults([]);
    setScreen("drill");
  };

  const startSpeed = (ci, mode) => {
    let wl;
    if(mode==="review") { wl=reviewWords(); } else { wl=CHUNKS[ci].words; }
    if(!wl.length) return;
    setChunkIdx(ci); setDrillMode(mode);
    setWords(shuffle(wl)); setIdx(0); setSpeedMs(0); setSpeedStart(null); setRunning(false);
    setScreen("speed");
  };

  const handleGrade = (grade) => {
    const w = words[idx];
    const ng = {...grades, [w.j]: grade};
    setGrades(ng); save(SK+"-g", ng);
    const nr = [...results, {w, grade}]; setResults(nr);
    if(idx < words.length-1) { setIdx(idx+1); setRevealed(false); }
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
      setSpeedRuns(ns); save(SK+"-s", ns);
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
      save(SK+"-g", {}); save(SK+"-s", []);
    }
  };

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
        <h1 style={S.logo}>2文字マスター</h1>
        <p style={S.sub}>424 Words — Clear them all</p>

        <div style={S.card}>
          <div style={S.row}>
            <span style={S.dim}>Mastered</span>
            <span style={S.bright}>{knownCount}/{totalWords} ({Math.round(knownCount/totalWords*100)}%)</span>
          </div>
          <div style={S.bar}><div style={{...S.fill, width:`${knownCount/totalWords*100}%`}}/></div>
          <div style={{...S.row, marginTop:6}}><span style={S.dim}>{remaining} words remaining</span></div>
        </div>

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

        <div style={{fontSize:11,color:"#22c55e",marginTop:8,marginBottom:4}}>✓ Auto-save active</div>
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
          <div style={S.jp}>{w.j}</div>
          <div style={S.kanji}>{w.k}</div>
          {!revealed && <div style={S.hint}>Tap to reveal</div>}
          {revealed && <div style={S.en}>{w.e}</div>}
        </div>
        {revealed && (
          <div style={S.grades}>
            <button style={S.gk} onClick={()=>handleGrade("know")}>✓ Know</button>
            <button style={S.gs} onClick={()=>handleGrade("shaky")}>~ Shaky</button>
            <button style={S.gd} onClick={()=>handleGrade("dont-know")}>✗ No</button>
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
        <div style={S.sjp} onClick={speedNext}>{w.j}</div>
        <div style={S.skanji}>{w.k}</div>
        <div style={S.hint}>{!running ? "Tap word to start" : "Read aloud → tap next"}</div>
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
