var cities = [{name:"94",to:"PATI - PANATLANTICA"},{name:"701",to:"BAHI - BAHEMA"},{name:"906",to:"BBDC - BANCO BRADESCO S.A."},{name:"922",to:"BAZA - BANCO DA AMAZONIA S.A."},{name:"1023",to:"BBAS - BANCO DO BRASIL S.A."},{name:"1120",to:"BGIP - BANESE"},{name:"1155",to:"BEES - BANESTES S/A"},{name:"1171",to:"BPAR - BANPARÁ S.A."},{name:"1210",to:"BRSR - BANRISUL S/A"},{name:"1228",to:"BNBR - BANCO DO NORDESTE"},{name:"1309",to:"BMIN - BANCO MERCANTIL DE INVESTIMENTOS SA"},{name:"1325",to:"BMEB - BANCO MERCANTIL DO BRASIL S/A"},{name:"1384",to:"BRIV - ALFA DE INVESTIMENTO"},{name:"1520",to:"BDLL - BARDELLA"},{name:"1562",to:"BALM - BAUMER"},{name:"1570",to:"BAUH - EXCELSIOR"},{name:"1686",to:"PMET - PRÓ METALURGIA"},{name:"1694",to:"BMKS - MONARK"},{name:"1970",to:"BMTO - BRASMOTOR S.A"},{name:"2038",to:"BUET - BUETTNER S/A - INDUSTRIA E COMERCIO - EM RECUPERAÇÃO JUDICIAL"},{name:"2062",to:"CAFE - CAFE SOLUVEL BRASILIA S/A"},{name:"2100",to:"CAMB - PENALTY"},{name:"2429",to:"RANI - CELULOSE IRANI"},{name:"2437",to:"ELET - ELETROBRAS"},{name:"2453",to:"CMIG - CEMIG"},{name:"2461",to:"CLSC - CELESC"},{name:"2488",to:"CCHI - CHIARELLI"},{name:"2577",to:"CESP - CESP CIA ENERGETICA SAO PAULO"},{name:"2909",to:"CIQU - CACIQUE"},{name:"3050",to:"CBEE - AMPLA"},{name:"3069",to:"FESA - FERBASA"},{name:"3077",to:"CEDO - CIA. DE FIAÇÃO E TECIDOS CEDRO CACHOEIRA"},{name:"3115",to:"CSAB - COMPANHIA DE SEGUROS ALIANÇA DA BAHIA"},{name:"3158",to:"CTNM - COTEMINAS"},{name:"3174",to:"IMBI - COMPANHIA DOCAS DE IMBITUBA"},{name:"3182",to:"DOCA - DOCAS S.A."},{name:"3190",to:"REDE - REDE ENERGIA"},{name:"3204",to:"EEEL - CEEE-GT"},{name:"3298",to:"HBTS - CIA HABITASUL DE PARTICIPAÇÕES"},{name:"3336",to:"IGUA - CIA. IGUAÇU DE CAFÉ SOLÚVEL"},{name:"3395",to:"CATA - COMPANHIA INDUSTRIAL CATAGUASES"},{name:"3549",to:"SCLO - SCHLOSSER TECIDOS"},{name:"3654",to:"MSPA - MELHORAMENTOS"},{name:"3824",to:"PALF - CPFL"},{name:"3891",to:"CRIV - ALFA FINANCEIRA"},{name:"3980",to:"GGBR - GERDAU S.A."},{name:"4030",to:"CSNA - CSN"},{name:"4057",to:"CRUZ - SOUZA CRUZ"},{name:"4081",to:"CTSA - SANTANENSE"},{name:"4146",to:"CTKA - KARSTEN"},{name:"4170",to:"VALE - VALE"},{name:"4359",to:"ELEK - ELEKEIROZ S/A"},{name:"4448",to:"CBMA - COBRASMA S/A"},{name:"4537",to:"CGRA - GRAZZIOTIN"},{name:"4669",to:"GUAR - GUARARAPES CONFECÇÕES"},{name:"4693",to:"ODER - CONSERVAS ODERICH SA"},{name:"4707",to:"BRGE - CONSORCIO ALFA"},{name:"4723",to:"CALI - CAL S/A"},{name:"4774",to:"LIXC - LIX DA CUNHA"},{name:"4782",to:"MEND - MENDES JUNIOR ENGENHARIA S/A"},{name:"4820",to:"BRKM - BRASKEM"},{name:"4863",to:"CORR - CORREA RIBEIRO SA COM. IND."},{name:"5150",to:"DHBI - DHB"},{name:"5207",to:"DOHL - DOHLER"},{name:"5258",to:"RADL - DROGASIL SA"},{name:"5312",to:"MNDL - MUNDIAL"},{name:"5380",to:"EALT - ELECTRO AÇO ALTONA S/A"},{name:"5410",to:"WEGE - WEG SA"},{name:"5576",to:"ENER - ENERSUL"},{name:"5762",to:"ETER - ETERNIT"},{name:"5770",to:"EUCA - EUCATEX"},{name:"5827",to:"FTRX - FAB TECIDOS C RENAUX"},{name:"5983",to:"SJOS - SÃO JOSÉ"},{name:"6017",to:"FBMC - FIBAM"},{name:"6041",to:"FIGE - INVESTIMENTOS BEMGE"},{name:"6076",to:"FNCN - FINANSINOS S/A CFI"},{name:"6173",to:"FJTA - FORJAS TAURUS SA"},{name:"6211",to:"FRAS - FRAS-LE S.A."},{name:"6343",to:"TUPY - TUPY"},{name:"6505",to:"VVAR - PONTO FRIO"},{name:"6629",to:"HETA - HERCULES S/A"},{name:"6700",to:"HOOT - HOTEIS OTHON S.A."},{name:"6815",to:"IGBR - GRADIENTE"},{name:"7510",to:"ROMI - ROMI"},{name:"7544",to:"TXRX - RENAUXVIEW"},{name:"7595",to:"INEP - INEPAR S/A"},{name:"7617",to:"ITSA - ITAÚSA"},{name:"7811",to:"JFEN - JOÃO FORTES ENGENHARIA S.A."},{name:"7870",to:"KEPL - KEPLER WEBER SA"},{name:"8036",to:"LIGH - LIGHT"},{name:"8087",to:"LAME - LOJAS AMERICANAS S.A."},{name:"8117",to:"LHER - LOJAS HERING"},{name:"8133",to:"LREN - RENNER"},{name:"8192",to:"LUXM - TREVISA INVESTIMENTOS SA"},{name:"8397",to:"MGEL - MANGELS"},{name:"8427",to:"ESTR - ESTRELA"},{name:"8451",to:"POMO - MARCOPOLO"},{name:"8540",to:"MERC - MERCANTIL BRASIL"},{name:"8575",to:"LEVE - MAHLE METAL LEVE"},{name:"8605",to:"MTIG - IGUAÇU"},{name:"8648",to:"DUQE - METALURGICA DUQUE SA"},{name:"8656",to:"GOAU - METALÚRGICA GERDAU"},{name:"8672",to:"MLFT - JEREISSATI PARTICIPAÇÕES S/A"},{name:"8753",to:"MTSA - METISA"},{name:"8818",to:"MMAQ - MINASMÁQUINAS S/A"},{name:"8893",to:"MOAR - MONTEIRO ARANHA"},{name:"9040",to:"NAFG - NADIR FIGUEIREDO"},{name:"9067",to:"NEMO - SUZANO HOLDING S.A."},{name:"9083",to:"NORD - NORDON INDS METALURGICAS SA"},{name:"9342",to:"PNVL - PANVEL FARMÁCIAS"},{name:"9393",to:"PMAM - PARANAPANEMA S.A."},{name:"9415",to:"AHEB - SÃO PAULO TURISMO S. A."},{name:"9512",to:"PETR - PETROBRAS"},{name:"9539",to:"PTNT - PETTENATI"},{name:"9954",to:"RPAD - ALFA HOLDINGS"},{name:"9989",to:"RPMG - REFINARIA DE PETRÓLEOS DE MANGUINHOS S.A"},{name:"10456",to:"ALPA - ALPARGATAS"},{name:"10472",to:"SLED - EDITORA SARAIVA"},{name:"10596",to:"SGEN - SERGEN"},{name:"10880",to:"SOND - SONDOTECNICA S/A."},{name:"10960",to:"SPRI - SPRINGER"},{name:"11070",to:"SGAS - WLM"},{name:"11207",to:"TCNO - TECNOSOLO S/A"},{name:"11215",to:"TENE - TECBLU"},{name:"11223",to:"TEKA - TEKA S.A."},{name:"11231",to:"TKNO - TEKNO"},{name:"11258",to:"TELB - TELEBRAS"},{name:"11312",to:"OIBR - BRASIL TELECOM S.A."},{name:"11398",to:"TIBR - MILLENNIUM INORGANIC CHEMICALS DO BRASIL"},{name:"11592",to:"UNIP - UNIPAR CARBOCLORO S.A."},{name:"11762",to:"VULC - VULCABRAS S/A."},{name:"11800",to:"WMBY - WEMBLEY SOCIEDADE ANÔNIMA"},{name:"11932",to:"MYPK - IOCHPE-MAXION"},{name:"11975",to:"AZEV - AZEVEDO & TRAVASSOS"},{name:"11991",to:"MWET - WETZEL S.A."},{name:"12190",to:"BOBR - BOMBRIL SA"},{name:"12262",to:"LFFE - LA FONTE TELECOM S/A"},{name:"12319",to:"JBDU - J B DUARTE"},{name:"12530",to:"ITEC - ITAUTEC S.A. - GRUPO ITAUTEC"},{name:"12572",to:"RCSL - RECRUSUL"},{name:"12653",to:"KLBN - KLABIN"},{name:"12793",to:"FIBR - FIBRIA"},{name:"12823",to:"APTI - ALIPERTI"},{name:"13030",to:"SULT - CONSTRUTORA SULTEPA S/A"},{name:"13285",to:"JOPA - JOSAPAR S/A"},{name:"13366",to:"HAGA - HAGA"},{name:"13412",to:"PTPA - ÉVORA S.A."},{name:"13439",to:"RSUL - METALURGICA RIOSULENSE S/A"},{name:"13447",to:"PPAR - POLPAR S.A."},{name:"13471",to:"PLAS - PLASCAR PARTICIPAÇÕES INDUSTRIAIS S.A"},{name:"13765",to:"MNPR - MINUPAR"},{name:"13773",to:"PTBL - PORTOBELLO S/A"},{name:"13781",to:"SCAR - SÃO CARLOS EMPREEND.E PARTICIPAÇÕES S.A."},{name:"13854",to:"MAPT - CIA MARCOPOLO"},{name:"13986",to:"SUZB - SUZANO PAPEL E CELULOSE SA"},{name:"14109",to:"RAPT - RANDON S.A. IMPLEMENTOS E PARTICIPAÇÕES"},{name:"14133",to:"TOYB - TEC TOY"},{name:"14176",to:"ELPL - AES ELETROPAULO"},{name:"14206",to:"BSLI - BRB"},{name:"14214",to:"DBEN - DIBENS LEASING SA"},{name:"14311",to:"CPLE - COPEL"},{name:"14320",to:"USIM - USIMINAS"},{name:"14346",to:"WHRL - WHIRLPOOL S.A"},{name:"14362",to:"CEPE - CELPE"},{name:"14397",to:"WISA - WIEST SA"},{name:"14443",to:"SBSP - SABESP"},{name:"14451",to:"CEBR - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA"},{name:"14460",to:"CYRE - CYRELA BRAZIL REALTY S.A."},{name:"14524",to:"CEEB - COELBA"},{name:"14559",to:"RHDS - M&G POLIÉSTER S.A."},{name:"14605",to:"CMGR - CEMAT"},{name:"14621",to:"NETC - NET SERVIÇOS DE COMUNICAÇÃO S.A."},{name:"14664",to:"SHUL - SCHULZ"},{name:"14680",to:"PCPA - PARCOM PARTICIPACOES SA"},{name:"14761",to:"HGTX - CIA HERING"},{name:"14796",to:"FPRT - FORPART SA"},{name:"14818",to:"CMSA - CIMS SA"},{name:"14826",to:"PCAR - PÃO DE AÇÚCAR"},{name:"14869",to:"COCE - CIA ENERG CEARA - COELCE"},{name:"14915",to:"GTDP - GTD PARTICIPAÇÕES SA"},{name:"14923",to:"STTZ - SANTHER"},{name:"15091",to:"LTEL - LITEL PARTICIPACOES"},{name:"15121",to:"LBIC - BIC ARRENDAMENTO MERCANTIL S.A"},{name:"15253",to:"ENGI - ENERGISA"},{name:"15261",to:"PSEG - SAUIPE S.A."},{name:"15300",to:"FRRN - ALL - AMÉRICA LATINA LOGÍSTICA MALHA NORTE S.A."},{name:"15342",to:"ESCE - ESCELSA"},{name:"15369",to:"VSPT - FERROVIA CENTRO-ATLÂNTICA S.A."},{name:"15377",to:"PQTM - HOPI HARI"},{name:"15407",to:"TPPF - PONTA DO FÉLIX"},{name:"15423",to:"INET - INEPAR TELECOM"},{name:"15458",to:"BTTL - BATTISTELLA"},{name:"15539",to:"GNAN - NEOENERGIA S.A."},{name:"15636",to:"CGAS - COMPANHIA DE GÁS DE SÃO PAULO - COMGÁS"},{name:"15695",to:"GRUC - GRUÇAI PARTICIPACOES S.A."},{name:"15784",to:"LIPR - ELETROPAR"},{name:"15865",to:"SQRM - ITAITINGA PARTICIPAÇÕES S.A."},{name:"16101",to:"GFSA - GAFISA"},{name:"16209",to:"ETRO - ELÉTRON S.A."},{name:"16225",to:"VLTR - VALETRON SA"},{name:"16233",to:"PBEL - BELAPART SA"},{name:"16284",to:"QVQP - 524 PARTICIPACOES SA"},{name:"16292",to:"BRFS - BRF S.A."},{name:"16306",to:"RSID - ROSSI RESIDENCIAL"},{name:"16330",to:"QVUM - 521 PARTICIPAÇÕES S/A"},{name:"16438",to:"OPTS - OPPORTUNITY SUL S.A."},{name:"16446",to:"STBR - NUMERAL 80 PARTICIPAÇÕES S.A."},{name:"16497",to:"ECPR - ENCORPAR"},{name:"16527",to:"AESL - AES SUL DISTRIB. GAÚCHA DE ENERGIA S.A."},{name:"16535",to:"RGEG - RGE - RIO GRANDE ENERGIA"},{name:"16560",to:"BNPA - BONAIRE"},{name:"16586",to:"OPSE - SUDESTE S.A."},{name:"16608",to:"ENMA - CEMAR"},{name:"16616",to:"CEGR - CEG"},{name:"16624",to:"UPKP - UPTICK PARTICIPACOES"},{name:"16632",to:"GPCP - GPC PARTICIPACOES SA"},{name:"16659",to:"PSSA - PORTO SEGURO SA"},{name:"16705",to:"ALEF - ALEF S/A"},{name:"16772",to:"BNDP - BNDESPAR"},{name:"16861",to:"CASN - CASAN"},{name:"16942",to:"OPHE - OPPORTUNITY ENERGIA E PARTICIPAÇÕES S.A."},{name:"16950",to:"OPDL - DALETH PARTICIPAÇÕES S.A."},{name:"16985",to:"EBEN - BANDEIRANTE"},{name:"16993",to:"EMAE - EMAE"},{name:"17329",to:"TBLE - TRACTEBEL ENERGIA"},{name:"17337",to:"OPRE - RET PARTICIPAÇÕES SA"},{name:"17361",to:"OPZI - ZAIN PARTICIPAÇÕES S/A"},{name:"17388",to:"FTRT - FUTURETEL SA"},{name:"17418",to:"TLVT - TELINVEST SA"},{name:"17434",to:"SPRT - LONGDIS SA"},{name:"17442",to:"PITI - LF TEL SA"},{name:"17450",to:"ALLL - ALL - AMÉRICA LATINA LOGÍSTICA S.A."},{name:"17485",to:"EKTR - ELEKTRO ELETRICIDADE E SERVIÇOS S.A."},{name:"17493",to:"CPTP - CAPITALPART PARTICIPAÇÕES S.A."},{name:"17540",to:"NEWT - NEWTEL PARTICIPAÇÕES S.A."},{name:"17558",to:"SLCT - SELECTPART PARTICIPAÇÕES S.A."},{name:"17590",to:"CNCP - CONCES DA ROD OSORIO-POA S/A - CONCEPA"},{name:"17639",to:"TIMP - TIM"},{name:"17647",to:"EBTP - EMBRATEL PARTICIPAÇÕES SA"},{name:"17671",to:"VIVT - TELEFÔNICA BRASIL"},{name:"17779",to:"MAOR - MAORI S.A."},{name:"17787",to:"ELMT - SUBESTAÇÃO ELETROMETRÔ"},{name:"17884",to:"BETP - BETAPART PARTICIPAÇÕES SA"},{name:"17892",to:"STBP - SANTOS BRASIL PARTICIPAÇÕES S.A."},{name:"17914",to:"MMXM - MMX MINERAÇÃO E METÁLICOS S.A."},{name:"17922",to:"BFRE - BRAZILIAN FINANCE & REAL ESTATE S.A."},{name:"17930",to:"GASC - ALL - AMÉRICA LATINA LOGÍSTICA MALHA PAULISTA S.A."},{name:"17949",to:"MRSA - MRS LOGÍSTICA S/A"},{name:"17965",to:"OPGM - GAMA PARTICIPAÇÕES SA"},{name:"17973",to:"KROT - KROTON EDUCACIONAL S.A."},{name:"18066",to:"ALTR - ALTERE SECURITIZADORA S/A"},{name:"18104",to:"AETA - AETATIS SECURITIZADORA"},{name:"18139",to:"CSRN - COSERN"},{name:"18236",to:"NOOS - PÁTRIA COMPANHIA SECURITIZADORA DE CRÉDITOS IMOBILIÁRIOS"},{name:"18309",to:"CELP - CELPA"},{name:"18333",to:"PRPT - PROMPT PARTICIPAÇÕES S/A"},{name:"18350",to:"GETI - AES TIETE SA"},{name:"18368",to:"GEPA - DUKE ENERGY INT,GERAÇÃO PARANAPANEMA SA"},{name:"18376",to:"TRPL - CTEEP"},{name:"18406",to:"RBRA - RB CAPITAL SECURITIZADORA RESIDENCIAL S.A."},{name:"18414",to:"IDNT - --"},{name:"18430",to:"WTPI - WTORRE PIC SECURITIZADORA DE CRED IMOBIL"},{name:"18465",to:"UGPA - ULTRAPAR PARTICIPAÇÕES SA"},{name:"18490",to:"CLAN - CLARION"},{name:"18538",to:"MNZC - TGMC"},{name:"18546",to:"CAEC - CAGECE"},{name:"18589",to:"INVT - INVESTCO S.A."},{name:"18597",to:"DTCY - DTCOM"},{name:"18627",to:"SAPR - SANEPAR"},{name:"18651",to:"VDNP - ARAUCÁRIA PARTICIPAÇÕES SA"},{name:"18660",to:"CPFE - CPFL ENERGIA S.A."},{name:"18678",to:"TLMP - TELEMAR PARTICIPAÇÔES S.A"},{name:"18708",to:"PEAB - CIA. DE PARTICIPAÇÕES ALIANÇA DA BAHIA"},{name:"18724",to:"BRAP - BRADESPAR S/A"},{name:"18759",to:"BSCS - BRAZILIAN SECURITIES CIA SECURITIZAÇÃO"},{name:"18775",to:"IVPR - INVEPAR"},{name:"18821",to:"CCRO - COMPANHIA DE CONCESSÕES RODOVIÁRIAS"},{name:"18953",to:"CPFG - CPFL GERAÇÂO DE ENERGIA S/A"},{name:"18961",to:"AEDU - ANHANGUERA EDUCACIONAL PARTICIPAÇÕES S.A."},{name:"18970",to:"ENGP - CIA BRASILIANA DE ENERGIA"},{name:"19011",to:"ECNT - ECONORTE"},{name:"19062",to:"CANT - CANTAROS PARTICIPAÇÕES S.A."},{name:"19070",to:"CALA - DOMMO EMPREENDIMENTOS IMOBILIÁRIOS S.A."},{name:"19097",to:"CAIA - CAIANDA PARTICIPAÇÕES S.A."},{name:"19100",to:"CTAX - CONTAX PARTICIPAÇÕES S.A."},{name:"19119",to:"CABI - CABINDA PARTICIPAÇÕES S.A."},{name:"19135",to:"CACO - CACONDE PARTICIPAÇÕES S.A."},{name:"19208",to:"CRTE - CRT SA"},{name:"19224",to:"NSAM - COMPANHIA NOVA SUL AMERICA"},{name:"19232",to:"PRMN - PROMAN"},{name:"19275",to:"CPFP - CPFL - PIRATININGA"},{name:"19305",to:"BIOM - BIOMM SA"},{name:"19313",to:"AELP - AES ELPA"},{name:"19330",to:"TPIS - TPI"},{name:"19348",to:"ITUB - ITAÚ UNIBANCO"},{name:"19356",to:"WTNS - WTORRE NSBC"},{name:"19364",to:"ITPB - ITAPEBI GERAÇÃO DE ENERGIA S/A"},{name:"19372",to:"WTSC - WTORRE SECURITIZADORA DE CRED. IMOB. SA"},{name:"19380",to:"WTTC - WTORRE TC SEC DE CRÉDITOS IMOBILIÁRIOS. S.A."},{name:"19437",to:"ANDG - AGCONCESSOES"},{name:"19445",to:"CSMG - COPASA MG"},{name:"19453",to:"ECOR - ECORODOVIAS INFRAESTRUTURA E LOGÍSTICA S.A."},{name:"19518",to:"IMIG - IMIGRANTES CIA SECURITIZADORA DE CRÉDITOS IMOBILIÁRIOS"},{name:"19542",to:"FBSC - FIBRA CIA SECURITIZADORA CRED IMOB"},{name:"19550",to:"NATU - NATURA COSMETICOS SA"},{name:"19569",to:"GOLL - GOL LINHAS AEREAS INTELIGENTES SA"},{name:"19577",to:"NDUT - NOVADUTRA"},{name:"19585",to:"UNIT - UNIVER CIDADE TRUST"},{name:"19593",to:"SNST - SANESALTO"},{name:"19607",to:"BESA - BAESA"},{name:"19615",to:"GRND - GRENDENE SA"},{name:"19623",to:"DASA - DIAGNOSTICOS DA AMERICA SA"},{name:"19640",to:"BDLS - BRADESCO LEASING SA ARREND MERCANTIL"},{name:"19658",to:"RNAR - RENAR MAÇAS SA"},{name:"19690",to:"BTSE - BTG PACTUAL SECURITIZADORA S.A"},{name:"19704",to:"BICS - BI CIA SECURITIZADORA DE CREDITOS IMOBILIARIOS"},{name:"19720",to:"BZRS - BRAZIL REALTY CIA SECURITIZADORA DE CREDITOS IMOLIARIOS"},{name:"19739",to:"RENT - LOCALIZA RENT A CAR"},{name:"19747",to:"BTSC - BETA SECURITIZADORA"},{name:"19763",to:"ENBR - EDP ENERGIAS DO BRASIL S/A"},{name:"19771",to:"ARTR - OHL BRASIL"},{name:"19810",to:"WTCJ - WTORRE CRJ SEC CRED IMOBILIARIOS SA"},{name:"19836",to:"CSAN - COSAN SA INDUSTRIA E COMERCIO"},{name:"19852",to:"TMPE - TERMOPERNAMBUCO SA"},{name:"19860",to:"RBCS - RB CAPITAL SECURITIZADORA S.A."},{name:"19879",to:"LIGT - LIGHT SA"},{name:"19895",to:"FDCS - FIDES  SECURITIZADORA CRED IMOB SA"},{name:"19909",to:"BRML - BR MALLS PARTICIPAÇOES S.A."},{name:"19917",to:"TEMP - TEMPO PARTICIPAÇOES S/A"},{name:"19925",to:"BRPR - BR PROPERTIES S.A."},{name:"19941",to:"WTVP - WTORRE VPA SEC DE CRED IMOBILIARIOS S.A"},{name:"19976",to:"WTTS - WTORRE TSSP SEC DE CRED IMOBILIÁRIOS S/A"},{name:"19984",to:"WTVR - WTORRE VRJ SEC CREDITOS IMOBILIÁRIOS S/A"},{name:"19992",to:"TOTS - TOTVS S.A"},{name:"20001",to:"VDNS - XX DE NOVEMBRO SEC DE CREDITOS IMOB S.A"},{name:"20010",to:"EQTL - EQUATORIAL ENERGIA S/A"},{name:"20028",to:"VLID - AMERICAN BANKNOTE COMPANY"},{name:"20036",to:"AGRO - BRASILAGRO CIA BRAS DE PROP AGRICOLAS"},{name:"20044",to:"CARD - CSU CARDSYSTEM S/A"},{name:"20052",to:"DNEN - DINAMICA ENERGIA S/A"},{name:"20060",to:"LUPA - LUPATECH"},{name:"20079",to:"UNCI - UNI CIDADE"},{name:"20087",to:"EMBR - EMBRAER"},{name:"20125",to:"ODPV - ODONTOPREV S/A"},{name:"20133",to:"BVLS - BV LEASING"},{name:"20141",to:"CREM - CREMER S.A."},{name:"20150",to:"AFLU - AFLUENTE G"},{name:"20168",to:"OGXP - OGX PETRÓLEO E GÁS PARTICIPAÇÕES S/A"},{name:"20184",to:"CCXC - CENTENNIAL ASSET PART. AMAPA S/A"},{name:"20192",to:"ANHB - CONCESSIONÁRIA SO SISTEMA ANHANGUERA BANDEIRANTES S/A"},{name:"20222",to:"GAIA - GAIA SECURITIZADORA S/A"},{name:"20257",to:"TAEE - TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA S.A."},{name:"20265",to:"BISA - BROOKFIELD INCORPORAÇÕES"},{name:"20303",to:"CMGD - CEMIG DISTRIBUIÇÃO S/A"},{name:"20320",to:"CMGT - CEMIG GT"},{name:"20338",to:"MDIA - M DIAS BRANCO SA IND E COM DE ALIMENTOS"},{name:"20346",to:"PFRM - PROFARMA"},{name:"20354",to:"VAGR - V-AGRO"},{name:"20362",to:"POSI - POSITIVO INFORMATICA SA"},{name:"20370",to:"LPSB - LOPES"},{name:"20397",to:"ECOV - ECOVIAS DOS IMIGRANTES"},{name:"20435",to:"TCSA - TECNISA S/A"},{name:"20451",to:"RDNI - RODOBENS NEGOCIOS IMOBILIARIOS SA"},{name:"20478",to:"PDGR - PDG REALTY SA EMPREENDIMENTOS E PARTS"},{name:"20494",to:"IGTA - IGUATEMI EMPRESA DE SHOPPING CENTERS S/A"},{name:"20508",to:"TAIP - TAIPE"},{name:"20516",to:"SMTO - SÃO MARTINHO SA"},{name:"20524",to:"EVEN - EVEN"},{name:"20532",to:"SANB - BANCO SANTANDER (BRASIL) S.A."},{name:"20540",to:"CPRE - CPFL RENOVÁVEIS"},{name:"20567",to:"PINE - BANCO PINE S/A"},{name:"20575",to:"JBSS - JBS SA"},{name:"20605",to:"JHSF - JHSF"},{name:"20613",to:"FRIO - METALFRIO SOLUTIONS S/A"},{name:"20621",to:"FHER - FERTILIZANTES HERINGER SA"},{name:"20630",to:"CRDE - CR2 EMPREENDIMENTOS IMOBILIÁRIOS S/A"},{name:"20648",to:"CEED - CEEE-D"},{name:"20656",to:"BEMA - BEMATECH  S/A"},{name:"20672",to:"BRCS - BRC SECURITIZADORA"},{name:"20680",to:"SFSA - BANCO SOFISA"},{name:"20702",to:"VIVR - VIVER"},{name:"20710",to:"LOGN - LOG-IN LOGISTICA INTERMODAL SA"},{name:"20729",to:"PRBC - PARANA"},{name:"20745",to:"SLCE - SLC AGRICOLA SA"},{name:"20770",to:"EZTC - EZ TEC EMPREEND. E PARTICIPAÇÕES S/A"},{name:"20788",to:"MRFG - MARFRIG"},{name:"20796",to:"DAYC - DAYCOVAL"},{name:"20800",to:"TGMA - TEGMA GESTÃO LOGÍSTICA SA"},{name:"20818",to:"IMWL - IMOWEL SECURITIZADORA"},{name:"20834",to:"SETI - SETIBA PARTICIPAÇÕES S/A"},{name:"20842",to:"MAGG - MAGNESITA REFRATARIOS S.A."},{name:"20850",to:"SAGP - ALLIS S.A."},{name:"20877",to:"HBOR - HELBOR"},{name:"20885",to:"IDVL - BANCO INDUSVAL & PARTNERS"},{name:"20907",to:"BHGR - BHG S.A. - BRAZIL HOSPITALITY GROUP"},{name:"20915",to:"MRVE - MRV ENGENHARIA"},{name:"20931",to:"BEEF - MINERVA S/A"},{name:"20958",to:"ABCB - ABC BRASIL"},{name:"20966",to:"SGPS - SPRINGS GLOBAL"},{name:"20974",to:"PRVI - COMPANHIA PROVIDENCIA"},{name:"20982",to:"MULT - MULTIPLAN"},{name:"20990",to:"BTOW - B2W - COMPANHIA DIGITAL"},{name:"21008",to:"GSHP - GENERAL SHOPPING BRASIL SA"},{name:"21016",to:"ESTC - ESTACIO PARTICIPAÇÕES SA"},{name:"21024",to:"VOES - CONC ROD DO OESTE DE S.PAULO-VIAOESTE SA"},{name:"21032",to:"CTBC - CTBC TELECOM"},{name:"21040",to:"CCPR - CYRELA COMMERCIAL PROPERTIES SA EMP PART"},{name:"21075",to:"VSON - VISION SECURITIZADORA"},{name:"21091",to:"DTEX - DURATEX"},{name:"21105",to:"NSEC - NOVA SECURITIZAÇÃO S/A"},{name:"21113",to:"BICB - BICBANCO"},{name:"21121",to:"SULA - SUL AMERICA S/A"},{name:"21130",to:"TRIS - TRISUL"},{name:"21156",to:"JMCD - J. MACEDO ALIM NORDESTE S/A  - AGUIA S/A"},{name:"21180",to:"BBRK - BRASIL BROKERS"},{name:"21199",to:"BPNM - BCO PANAMERICANO"},{name:"21237",to:"ENEV - MPX ENERGIA SA"},{name:"21245",to:"CTLG - CENTENNIAL ASSET PARTICIPAÇÕES AÇU SA"},{name:"21261",to:"MONP - MONTICIANO PARTICIPAÇÕES S/A"},{name:"21300",to:"ALSC - ALIANSCE"},{name:"21334",to:"NUTR - NUTRIPLANT"},{name:"21342",to:"OSXB - OSX"},{name:"21350",to:"DIRR - DIRECIONAL ENGENHARIA SA"},{name:"21393",to:"GPAR - CELGPAR"},{name:"21431",to:"HYPE - HYPERMARCAS S/A"},{name:"21440",to:"LLIS - LE LIS BLANC DEUX"},{name:"21482",to:"LLXL - LLX LOGISTICA SA"},{name:"21490",to:"ALUP - ALUPAR INVESTIMENTO S/A"},{name:"21512",to:"AQSC - ÁQUILLA SECURITIZADORA SA"},{name:"21555",to:"UNID - UNIDAS S/A"},{name:"21563",to:"BRNA - BERNA PARTICIPAÇÕES SA"},{name:"21580",to:"BLMT - BRT HOLDING 1 S.A."},{name:"21601",to:"BSEL - BASEL PARTICIPAÇÕES S/A"},{name:"21610",to:"BVMF - BM&F BOVESPA S/A"},{name:"21636",to:"RNEW - RENOVA ENERGIA S/A"},{name:"21644",to:"PDGS - PDG COMPANHIA SECURITIZADORA"},{name:"21652",to:"CTXP - CTX PARTICIPAÇÕES S/A"},{name:"21687",to:"IVLG - INVITEL LEGACY SA"},{name:"21717",to:"TRPN - TARPON"},{name:"21725",to:"AORE - ALL ORE MINERAÇÃO SA"},{name:"21733",to:"CIEL - CIELO S.A."},{name:"21741",to:"ECOA - ECO. SEC. DTOS. CREDIT. AGRONEGÓCIOS S/A"},{name:"21750",to:"IFSC - INFRASEC SECURITIZADORA  S/A"},{name:"21784",to:"EBXG - EBX BRASIL SA"},{name:"21792",to:"CTIP - CETIP S.A."},{name:"21865",to:"PORC - BFG"},{name:"21881",to:"FLRY - FLEURY SA"},{name:"21903",to:"ERDV - ECORODOVIAS CONCESSÕES E SERVIÇOS S/A"},{name:"21920",to:"ASTE - BARIGUI SECURITIZADORA SA"},{name:"21946",to:"MPLU - MULTIPLUS SA"},{name:"22012",to:"MILS - MILLS ESTRUTURAS E SERVIÇOS DE ENGENHARIA S/A"},{name:"22020",to:"JSLG - JSL S.A."},{name:"22047",to:"DXXI - DUXXI IMOBILIÁRIA S.A."},{name:"22055",to:"AMAR - MARISA LOJAS SA"},{name:"22071",to:"CRBD - CONCESSIONÁRIA ROTA DAS BANDEIRAS S/A"},{name:"22128",to:"RDTR - REDENTOR ENERGIA S/A"},{name:"22136",to:"TERI - TEREOS INTERNACIONAL S/A"},{name:"22160",to:"PLSC - POLO CAPITAL SECURITIZADORA S/A"},{name:"22179",to:"AFLT - AFLUENTE TRANSMISSÃO DE ENERGIA ELETRICA S/A"},{name:"22187",to:"HRTP - HRT PARTICIPAÇÕES EM PRETROLEO SA"},{name:"22217",to:"BRIN - BRASIL INSURANCE PARTICIPAÇÕES E ADMMINITRAÇÃO S/A"},{name:"22250",to:"ASEC - BRASIL AGROSEC COMPAHIA SECURITIZADORA"},{name:"22268",to:"RPTA - CONCESSIONARIA AUTO RAPOSO TAVARES SA-CART"},{name:"22276",to:"APCS - APICE SECURITIZADORA IMOBILIARIA S.A."},{name:"22330",to:"RJCP - RJCP EQUITY S/A"},{name:"22349",to:"ARZZ - AREZZO INDÚSTRIA E COMERCIO S/A"},{name:"22357",to:"SSBR - SONAE SIERRA BRASIL S/A"},{name:"22365",to:"QGEP - QGEP PARTICIPAÇÕES SA"},{name:"22381",to:"AUTM - AUTOMETAL S/A"},{name:"22390",to:"OCTS - OCTANTE SECURITIZADORA SA"},{name:"22411",to:"ASCP - CONCESSIONÁRIA DAS RODOVIAS AYRTON SENNA E CARVALHO PINTO S/A"},{name:"22438",to:"IMCH - INTERNATIONAL MEAL COMPANY"},{name:"22454",to:"SHOW - T4F ENTRETENIMENTO SA"},{name:"22470",to:"MGLU - MAGAZINE LUIZA SA"},{name:"22497",to:"QUAL - QUALICORP SA"},{name:"22500",to:"BPHA - BRASIL PHARMA SA"},{name:"22519",to:"TECN - TECHNOS SA"},{name:"22543",to:" - VIARONDON CONCESSIONÁRIA DE RODOVIA SA"},{name:"22551",to:"ABRE - ABRIL EDUCAÇÃO S/A"},{name:"22560",to:"INBD - INBRANDS SA"},{name:"22578",to:"HPIA - HARPIA ÔMEGA PARTICIPAÇÕES S.A."},{name:"22586",to:"MNBI - MANABI SA"},{name:"22594",to:"DVIX - DESENVIX ENERGIAS RENOVÁVEIS SA"},{name:"22616",to:"BPAC - BANCO UBS PACTUAL S/A"},{name:"22632",to:"NTES - BELEZA PARTICIPAÇÕES"},{name:"22640",to:"NISA - NISA PARTICIPAÇÕES"},{name:"22659",to:"NOAH - NOAH PARTICIPAÇÕES"},{name:"22667",to:"NAOM - NAOMI PARTICIPAÇÕES"},{name:"22675",to:"HBSA - HIDROVIAS DO BRASIL S.A."},{name:"22683",to:"CPTE - CACHOEIRA PAULISTA TRANSMISSORA DE ENERGIA SA"},{name:"22691",to:"LCAM - LOCAMERICA"},{name:"22721",to:"RDVT - CONCESSIONARIA RODOVIAS TIETE SA"},{name:"22764",to:"GAFL - GAIA FLORESTAL SECURITIZADORA S.A."},{name:"22772",to:"VIGR - VIGOR ALIMENTOS S.A."},{name:"22799",to:"SNSL - SENIOR SOLUTION S.A."},{name:"22845",to:"BSEV - LDC BIOENERGIA SA"},{name:"22853",to:"FGOL - FRIGOL FOODS PARTICPAÇÕES S.A."},{name:"22985",to:"NRTQ - NORTEC QUIMICA S.A."},{name:"23060",to:"TRIA - TRIÂNGULO DO SOL AUTO-ESTRADAS S.A."},{name:"23108",to:"BPMP - BPMB I PARTICIPAÇÕES S.A."},{name:"23175",to:"CABB - COMPANHIA DE AGUAS DO BRASIL - CAB AMBIENTAL"},{name:"23183",to:"ALTS - ALTUS SISTEMA DE AUTOMAÇÃO S.A."},{name:"23264",to:"ABEV - AMBEV S.A"},{name:"23299",to:"MLPP - JP PARTICIPAÇÕES S.A."},{name:"23302",to:"QUSW - QUALITY SOFWARE S.A."}];