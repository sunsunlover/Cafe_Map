import { useState } from "react";
import { MapContainer, TileLayer, Marker, } from "react-leaflet";
import BottomSheet from "../components/BottomSheet";
import cafeImage from "../assets/rogo.jpg";
import './cafehome.css';

function Page1() {

  const [sheetOpen, setSheetOpen] = useState(true);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [snapIndex, setSnapIndex] = useState(2);

  const cafes = [
  {
    id: 1,
    name: "Bicycle Coffee Tokyo",
    category: "coffee",
    area: "千代田区",
    position: [35.76552044155951, 139.8717455633526],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 2,
    name: "スターバックス コーヒー 皇居外苑 和田倉噴水公園店",
    category: "coffee",
    area: "千代田区",
    position: [35.68321751234949, 139.76136624811463],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 3,
    name: "Coffee & Bar gg GENIE",
    category: "coffee",
    area: "台東区",
    position: [35.70406965221475, 139.79075123723138],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 4,
    name: "東京スカイツリー",
    category: "attraction",
    area: "墨田区",
    position: [35.71092950059816, 139.81116173993047],
    image: cafeImage,
    description: "建造物",
  },
  {
    id: 5,
    name: "BUG cafe",
    category: "cafe",
    area: "千代田区",
    position: [35.67857089985157, 139.76728427039907],
    image: cafeImage,
    description: "アートミュージアム・カフェ",
  },

  ///ここから足立区  

  {
    id: 6,
    name: "Shanty",
    category: "coffee",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 7,
    name: "Takuru cafe",
    category: "cafe",
    area: "足立区",
    position: [35.74657679970388, 139.80116339404577],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 8,
    name: "日本茶喫茶 KiKi北千住",
    category: "cafe",
    area: "足立区",
    position: [35.74461828414724, 139.804045147145],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 9,
    name: "BUoY Cafe & Bar",
    category: "cafe",
    area: "足立区",
    position: [35.74349828160191, 139.80219025866762],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 10,
    name: "Mills Coffee",
    category: "cafe",
    area: "足立区",
    position: [35.74153470192527535,139.7986937417006],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  
  ///ここまで足立区

  ///ここから墨田区

  {
    id: 11,
    name: "ROCA Coffee Rosters",
    category: "coffee",
    area: "墨田区",
positionposition: [35.71736501267831,139.81575338322745],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 12,
    name: "haydEn, cafeposition",
    category: "coffee",
    area: "墨田区",
    position: [35.71225524221233, 139.80943909370612],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 13,
    name: "むうや",
    category: "bakery",
    area: "墨田区",
    position: [35.71098178813709, 139.80401030817305],
    image: cafeImage,
    description: "ベーカリー",
  },
  {
    id: 14,
    name: "Mr.Bakeman Bake&coffee",
    category: "coffee",
    area: "墨田区",
    position: [35.708827441907374, 139.81498600082057],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 15,
    name: "PERK SHOP COFFEE & PLANTS",
    category: "coffee",
    area: "墨田区",
    position: [35.70838351263704, 139.81147217909455],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 16,
    name: "el coffee",
    category: "cafe",
    area: "墨田区",
    position: [35.70451056457074, 139.81472930371817],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 17,
    name: "Japanese milk tea & vegan scone 「And Tei」",
    category: "cafe",
    area: "墨田区",
    position: [35.70201399460244, 139.81803018048376],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 18,
    name: "私立珈琲小学校 Coffee Elementary School",
    category: "coffee",
    area: "墨田区",
    position: [35.6977021933204, 139.81799167028916],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 19,
    name: "Dessert lab",
    category: "cafe",
    area: "墨田区",
    position: [35.69800214954656, 139.81184055830968],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 20,
    name: "Shanty",
    category: "coffee",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 21,
    name: "morning vegan waffle & coffee 「mute」",
    category: "coffee",
    area: "墨田区",
    position: [35.694593336425335, 139.80767325462918],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 22,
    name: "SINGLE O RYOGOKU ROASTWORKS/CAFE",
    category: "roastery",
    area: "墨田区",
    position: [35.69798603318385, 139.8032566070799],
    image: cafeImage,
    description: "コーヒー焙煎所",
  },
  {
    id: 23,
    name: "MMC",
    category: "coffee",
    area: "墨田区",
    position: [35.69700278558489, 139.8026526640665],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 24,
    name: "CHILL OUT COFFEE &...RECORDS",
    category: "coffee",
    area: "墨田区",
    position: [35.69486900976421, 139.8007249945142],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 25,
    name: "o2 COFFEE CLUB",
    category: "coffee",
    area: "墨田区",
    position: [35.69383102052366, 139.7968169106943],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 26,
    name: "Marked",
    category: "bakery",
    area: "墨田区",
    position: [35.7021864021552, 139.79623151516685],
    image: cafeImage,
    description: "ベーカリー",
  },
  {
    id: 27,
    name: "Leaves Coffee Roasters",
    category: "roastery",
    area: "墨田区",
    position: [35.702708355664285, 139.7978320352652],
    image: cafeImage,
    description: "コーヒー焙煎所",
  },
  {
    id: 28,
    name: "safn° サフン",
    category: "cafe",
    area: "墨田区",
    position: [35.70487272090671, 139.80011256860243],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 29,
    name: "I'll",
    category: "coffee",
    area: "墨田区",
    position: [35.70552861671571, 139.79719140574178],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },

    ///ここまで墨田区

    ///ここから江東区

  {
    id: 30,
    name: "喫茶 東京郊外",
    category: "cafe",
    area: "江東区",
    position: [35.700886194635196, 139.83416212858134],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 31,
    name: "chigaya morishita",
    category: "bakery",
    area: "江東区",
    position: [35.6876624140193, 139.80040744307772],
    image: cafeImage,
    description: "ベーカリー",
  },
  {
    id: 32,
    name: "PARK STAND TOKYO 木場",
    category: "cafe",
    area: "江東区",
    position: [35.67616032235468, 139.80660391425874],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 33,
    name: "MONNAKA COFFEE",
    category: "coffee",
    area: "江東区",
    position: [35.67261107541043, 139.79558138820028],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 34,
    name: "ブルーボトルコーヒー 豊洲パークカフェ",
    category: "coffee",
    area: "江東区",
    position: [35.65363949467704, 139.79331238716418],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },                        
  {
    id: 35,
    name: "soko station 146",
    category: "cafe",
    area: "江東区",
    position: [35.64410658946624, 139.82438291142014],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 36,
    name: "LONGBOARD CAFÉ",
    category: "cafe",
    area: "江東区",
    position: [35.6275556840388, 139.77253749420356],
    image: cafeImage,
    description: "カフェ・喫茶",
  },  
  
    ///ここまで江東区

    ///ここから葛飾区

  {
    id: 37,
    name: "TAWKS",
    category: "coffee",
    area: "葛飾区",
    position: [35.76364206526425, 139.83966633006796],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 38,
    name: "カフェ こぼれび",
    category: "cafe",
    area: "葛飾区",
    position: [35.764815980847885, 139.84875656815976],
    image: cafeImage,
    description: "カフェ・喫茶",
  },  
  {
    id: 39,
    name: "GURA",
    category: "restaurant",
    area: "葛飾区",
    position: [35.76841951710792, 139.86806283913657],
    image: cafeImage,
    description: "レストラン",
  },  
  {
    id: 40,
    name: "アオトコーヒー",
    category: "cafe",
    area: "葛飾区",
    position: [35.75323398879645, 139.8513672636453],
    image: cafeImage,
    description: "カフェ・喫茶",
  },  

    ///ここまで葛飾区

    ///ここから江戸川区

  {
    id: 41,
    name: "coffee house takizawake",
    category: "coffee",
    area: "江戸川区",
    position: [35.74341182588929, 139.8900643582228],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  

    ///ここまで江戸川区 

    ///ここから足立区

  {
    id: 42,
    name: "きつね堂",
    category: "cafe",
    area: "足立区",
    position: [35.764752566817386, 139.80521162178653],
    image: cafeImage,
    description: "カフェ・喫茶",
  },  
  {
    id: 43,
    name: "Ogiso cafe",
    category: "cafe",
    area: "足立区",
    position: [35.76808156956642, 139.77293785081744],
    image: cafeImage,
    description: "カフェ・喫茶店",
  }, 
  {
    id: 44,
    name: "パンいつぞ",
    category: "bakery",
    area: "足立区",
    position: [35.78122377652729, 139.7737212319573],
    image: cafeImage,
    description: "ベーカリー",
  },    
  {
    id: 45,
    name: "カフェ・サンクチュアリ",
    category: "cafe",
    area: "足立区",
    position: [35.781699506722006, 139.78897276345475],
    image: cafeImage,
    description: "カフェ・喫茶",
  },    
  {
    id: 46,
    name: "縁側カフェ（昭和の家）",
    category: "cafe",
    area: "足立区",
    position: [35.800175720686006, 139.7982984623274],
    image: cafeImage,
    description: "カフェ・喫茶",
  },  
  
    ///ここまで足立区

    ///ここから北区  


  {
    id: 47,
    name: "喫茶 深海",
    category: "cafe",
    area: "北区",
    position: [35.76279104278823, 139.72024361161914],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 48,
    name: "New Again Espresso",
    category: "cafe",
    area: "北区",
    position: [35.76130080626927, 139.7179159564252],
    image: cafeImage,
    description: "カフェ・喫茶",
  },   
  {
    id: 49,
    name: "Granary’s Coffee",
    category: "roastery",
    area: "北区",
    position: [35.75692888501654, 139.73930380891574],
    image: cafeImage,
    description: "コーヒー焙煎所",
  }, 
  {
    id: 50,
    name: "ココフル",
    category: "cafe",
    area: "北区",
    position: [35.74348675647755, 139.7461624440663],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 

    ///ここまで北区

    ///ここから練馬区

  {
    id: 51,
    name: "かすたねっと",
    category: "sweets",
    area: "練馬区",
    position: [35.74130272298908, 139.65593270223067],
    image: cafeImage,
    description: "洋菓子店",
  }, 

    ///ここまで練馬区

    ///ここから豊島区

  {
    id: 52,
    name: "SUNNY DAYS pudding cafe",
    category: "cafe",
    area: "豊島区",
    position: [35.73309551964873, 139.70384877758937],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 53,
    name: "gelato pique cafe creperie ルミネ池袋店",
    category: "cafe",
    area: "豊島区",
    position: [35.72898572937235, 139.7092540657096],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 54,
    name: "lili",
    category: "cafe",
    area: "豊島区",
    position: [35.726421881324754, 139.71217393205464],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 55,
    name: "vitto.",
    category: "cafe",
    area: "豊島区",
    position: [35.72647366246738, 139.71807050978902],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 56,
    name: "iZ COFFEE ROASTER",
    category: "coffee",
    area: "豊島区",
    position: [35.73071466039908, 139.72448267822594],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  }, 
  {
    id: 57,
    name: "signe",
    category: "coffee",
    area: "豊島区",
    position: [35.738739375960385, 139.7461561743596],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  }, 
  {
    id: 58,
    name: "Moi mimi",
    category: "cafe",
    area: "豊島区",
    position: [35.73832791703761, 139.74853304676745],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 

  ///ここまで豊島区

  ///ここから文京区

  {
    id: 59,
    name: "八百コーヒー店",
    category: "coffee",
    area: "文京区",
    position: [35.72760931462276, 139.7456837592029],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  }, 
  {
    id: 60,
    name: "駒込カフェ",
    category: "cafe",
    area: "文京区",
    position: [35.726319229314704, 139.75566264967583],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 61,
    name: "CIBI TOKYO",
    category: "cafe",
    area: "文京区",
    position: [35.72517941179584, 139.764126387828],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 62,
    name: "HANARE COFFEE STUDIO",
    category: "cafe",
    area: "文京区",
    position: [35.719799836038796, 139.76287450490508],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 63,
    name: "COFFEE STAIN - 根津 -",
    category: "coffee",
    area: "文京区",
    position: [35.71777353487007, 139.764772038255],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  }, 
  {
    id: 64,
    name: "MATCHA&ESPRESSO MIYANO-YU",
    category: "cafe",
    area: "文京区",
    position: [35.71832802647161, 139.76522740551766],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 65,
    name: "trevo COFFEE&MEALS",
    category: "restaurant",
    area: "文京区",
    position: [35.70450973685989, 139.75626423763444],
    image: cafeImage,
    description: "ブランチ・レストラン",
  }, 

  ///ここまで文京区

  ///ここから板橋区

  ///ここまで板橋区

  ///ここから杉並区

  {
    id: 66,
    name: "nido",
    category: "coffee",
    area: "杉並区",
    position: [35.717486592845425, 139.58859416728404],
    image: cafeImage,
    description: "コーヒースタンド",
  },   
  {
    id: 67,
    name: "MELTIM TOKYO",
    category: "cafe",
    area: "杉並区",
    position: [35.70125274161524, 139.64752677631108],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 68,
    name: "NEYO KOENJI park side studio and coffee",
    category: "cafe",
    area: "杉並区",
    position: [35.70380326017269, 139.6519156252309],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 
  {
    id: 69,
    name: "RAD BROS CAFE",
    category: "cafe",
    area: "杉並区",
    position: [35.705682454145276, 139.6553533118214],
    image: cafeImage,
    description: "カフェ・喫茶",
  },       
  {
    id: 70,
    name: "Margaret house（マーガレット ハウス）",
    category: "cafe",
    area: "杉並区",
    position: [35.707988554917776, 139.64980293420103],
    image: cafeImage,
    description: "カフェ・喫茶",
  },   
  {
    id: 71,
    name: "dirty spoon",
    category: "cafe",
    area: "杉並区",
    position: [35.66768496663404, 139.6384739408805],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  
    ///ここまで杉並区

    ///ここから中野区  

  {
    id: 72,
    name: "ジュノス カフェ 高円寺店",
    category: "cafe",
    area: "中野区",
    position: [35.70937296936628, 139.65137504807714],
    image: cafeImage,
    description: "カフェ・喫茶",
  },   
  {
    id: 73,
    name: "algorithm (アルゴリズム)",
    category: "bakery",
    area: "中野区",
    position: [35.71445287607182, 139.6661341860655],
    image: cafeImage,
    description: "ベーカリー",
  },   
  {
    id: 74,
    name: "Butter Coffee Stand",
    category: "coffee",
    area: "中野区",
    position: [35.7100803100654, 139.6646696923199],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  }, 
  {
    id: 75,
    name: "純喫茶ジンガロ",
    category: "cafe",
    area: "中野区",
    position: [35.70953862649058, 139.66579181018],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 76,
    name: "LOU",
    category: "coffee",
    area: "中野区",
    position: [35.7091716609905, 139.66653401982134],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },   
  {
    id: 77,
    name: "cafe nom.",
    category: "cafe",
    area: "中野区",
    position: [35.7028874637743, 139.68545421859898],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 

    ///ここまで中野区

    ///ここから世田谷区  
  {
    id: 78,
    name: "HEIM Coffee（ハイム）",
    category: "cafe",
    area: "世田谷区",
    position: [35.66654233159445, 139.64181313299053],
    image: cafeImage,
    description: "カフェ・喫茶",
  }, 

    ///ここまで世田谷区
    
    ///ここから目黒区    
  {
    id: 79,
    name: "",
    category: "",
    area: "",
    position: [, ],
    image: cafeImage,
    description: "",
  }, 

    ///ここまで目黒区

    ///ここから大田区

    ///ここまで大田区

    ///ここから品川区

    ///ここまで品川区

    ///ここから新宿区

    ///ここまで新宿区

    ///ここから渋谷区

    ///ここまで渋谷区

    ///ここから台東区

    ///ここまで台東区

    ///ここから千代田区

    ///ここまで千代田区

    ///ここから中央区

    ///ここまで中央区

    ///ここから港区

    ///ここまで港区

];

  return (
    <div className="container">

      <MapContainer
        center={[35.681236, 139.767125]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          {cafes.map((cafe) => (
             <Marker
                key={cafe.id}
                position={cafe.position}
                eventHandlers={{
                  click: () => {
                    setSelectedCafe(cafe);
                    setSheetOpen(true);
                  },
                }}
              />
            ))}
          

      </MapContainer>
      <BottomSheet
        open={sheetOpen}
        setOpen={setSheetOpen}
        selectedCafe={selectedCafe}
        snapIndex={snapIndex}
        setSnapIndex={setSnapIndex}
        setSelectedCafe={setSelectedCafe}
     />
     {!sheetOpen && (
       <button
         className="open-sheet-btn"
         onClick={() => setSheetOpen(true)}
       >
        <div className="handle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
     )}
    </div>
  );
}

export default Page1;