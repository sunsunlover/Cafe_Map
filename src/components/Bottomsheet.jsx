import { Sheet } from "react-modal-sheet";
import { useState, useEffect } from "react";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function BottomSheet({
  open,
  setOpen,
  selectedCafe,
  snapIndex,
  setSnapIndex,
  setSelectedCafe,
}) {
  const [saved, setSaved] = useState(false);

  // カフェを選択したとき、そのカフェが保存済みか確認
  useEffect(() => {
    if (!selectedCafe) {
      setSaved(false);
      return;
    }

    const savedCafes =
      JSON.parse(localStorage.getItem("savedCafes")) || [];

    const alreadySaved = savedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    setSaved(alreadySaved);
  }, [selectedCafe]);

  // ハートを押したとき
  const handleSave = () => {
    if (!selectedCafe) return;

    const savedCafes =
      JSON.parse(localStorage.getItem("savedCafes")) || [];

    const alreadySaved = savedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    if (alreadySaved) {
      // 保存済みなら削除
      const newSavedCafes = savedCafes.filter(
        (cafe) => cafe.id !== selectedCafe.id
      );

      localStorage.setItem(
        "savedCafes",
        JSON.stringify(newSavedCafes)
      );

      setSaved(false);
    } else {
      // 保存されていなければ追加
      savedCafes.push(selectedCafe);

      localStorage.setItem(
        "savedCafes",
        JSON.stringify(savedCafes)
      );

      setSaved(true);
    }
  };

  return (
    <Sheet
      isOpen={open}
      onClose={() => setOpen(false)}
      snapPoints={[0, 0.12, 0.45, 0.8, 1]}
      initialSnap={2}
      snap={snapIndex}
      onSnap={setSnapIndex}
    >
      <Sheet.Container>
        <Sheet.Header />

        <Sheet.Content>
          {selectedCafe ? (
            <div style={{ padding: "20px" }}>

              <img
                src={selectedCafe.image}
                alt={selectedCafe.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>{selectedCafe.name}</h2>

              <button
                 onClick={handleSave}
                 style={{
                   background: "none", 
                   border: "none",
                   cursor: "pointer",
                   fontSize: "28px",
                   color: saved ? "red" : "gray",
                  }}
              >
                   {saved ? <FaHeart /> : <FiHeart />}
              </button>
              </div>

              <p>{selectedCafe.description}</p>

            </div>
          ) : null}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default BottomSheet;