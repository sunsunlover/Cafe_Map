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
    area: "千代田区",
    position: [35.76552044155951, 139.8717455633526],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 2,
    name: "スターバックス コーヒー 皇居外苑 和田倉噴水公園店",
    area: "千代田区",
    position: [35.68321751234949, 139.76136624811463],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 3,
    name: "Coffee & Bar gg GENIE",
    area: "台東区",
    position: [35.70406965221475, 139.79075123723138],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 4,
    name: "東京スカイツリー",
    area: "墨田区",
    position: [35.71092950059816, 139.81116173993047],
    image: cafeImage,
    description: "建造物",
  },
  {
    id: 5,
    name: "BUG cafe",
    area: "千代田区",
    position: [35.67857089985157, 139.76728427039907],
    image: cafeImage,
    description: "アートミュージアム・カフェ",
  },

  ///ここから足立区  

  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 7,
    name: "Takuru cafe",
    area: "足立区",
    position: [35.74657679970388, 139.80116339404577],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 8,
    name: "日本茶喫茶 KiKi北千住",
    area: "足立区",
    position: [35.74461828414724, 139.804045147145],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 9,
    name: "BUoY Cafe & Bar",
    area: "足立区",
    position: [35.74349828160191, 139.80219025866762],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 10,
    name: "Mills Coffee",
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
    area: "墨田区",
    position: [35.71736501267831,139.81575338322745],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 12,
    name: "haydEn, cafe & bar",
    area: "墨田区",
    position: [35.71225524221233, 139.80943909370612],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 13,
    name: "むうや",
    area: "墨田区",
    position: [35.71098178813709, 139.80401030817305],
    image: cafeImage,
    description: "ベーカリー",
  },
  {
    id: 14,
    name: "Mr.Bakeman Bake&coffee",
    area: "墨田区",
    position: [35.708827441907374, 139.81498600082057],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 15,
    name: "PERK SHOP COFFEE & PLANTS",
    area: "墨田区",
    position: [35.70838351263704, 139.81147217909455],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 16,
    name: "el coffee",
    area: "墨田区",
    position: [35.70451056457074, 139.81472930371817],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 17,
    name: "Japanese milk tea & vegan scone 「And Tei」",
    area: "墨田区",
    position: [35.70201399460244, 139.81803018048376],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 18,
    name: "私立珈琲小学校 Coffee Elementary School",
    area: "墨田区",
    position: [35.6977021933204, 139.81799167028916],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 19,
    name: "Dessert lab",
    area: "墨田区",
    position: [35.69800214954656, 139.81184055830968],
    image: cafeImage,
    description: "カフェ・喫茶",
  },
  {
    id: 20,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },                        
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },    
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  {
    id: 6,
    name: "Shanty",
    area: "足立区",
    position: [35.74825802362632, 139.8019848837611835],
    image: cafeImage,
    description: "コーヒーショップ・喫茶店",
  },  
  
  
  

  


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