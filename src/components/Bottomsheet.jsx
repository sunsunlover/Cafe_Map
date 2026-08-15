import { Sheet } from "react-modal-sheet";
import { useState, useEffect } from "react";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { ImCheckmark2 } from "react-icons/im";

function BottomSheet({
  open,
  setOpen,
  selectedCafe,
  snapIndex,
  setSnapIndex,
  setSelectedCafe,
}) {
  const [saved, setSaved] = useState(false);
  const [visited, setVisited] = useState(false);

  // カフェを選択したとき、
  // お気に入り・行ったところの保存状態を確認
  useEffect(() => {
    if (!selectedCafe) {
      setSaved(false);
      setVisited(false);
      return;
    }

    // お気に入りを確認
    const savedCafes =
      JSON.parse(localStorage.getItem("savedCafes")) || [];

    const alreadySaved = savedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    setSaved(alreadySaved);

    // 行ったところを確認
    const visitedCafes =
      JSON.parse(localStorage.getItem("visitedCafes")) || [];

    const alreadyVisited = visitedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    setVisited(alreadyVisited);

  }, [selectedCafe]);


  // ❤️ お気に入りボタン
  const handleSave = () => {
    if (!selectedCafe) return;

    const savedCafes =
      JSON.parse(localStorage.getItem("savedCafes")) || [];

    const alreadySaved = savedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    if (alreadySaved) {
      // 保存解除
      const newSavedCafes = savedCafes.filter(
        (cafe) => cafe.id !== selectedCafe.id
      );

      localStorage.setItem(
        "savedCafes",
        JSON.stringify(newSavedCafes)
      );

      setSaved(false);

    } else {
      // 保存
      savedCafes.push(selectedCafe);

      localStorage.setItem(
        "savedCafes",
        JSON.stringify(savedCafes)
      );

      setSaved(true);
    }
  };


  // 📍 行ったところボタン
  const handleVisited = () => {
    if (!selectedCafe) return;

    const visitedCafes =
      JSON.parse(localStorage.getItem("visitedCafes")) || [];

    const alreadyVisited = visitedCafes.some(
      (cafe) => cafe.id === selectedCafe.id
    );

    if (alreadyVisited) {
      // 保存解除
      const newVisitedCafes = visitedCafes.filter(
        (cafe) => cafe.id !== selectedCafe.id
      );

      localStorage.setItem(
        "visitedCafes",
        JSON.stringify(newVisitedCafes)
      );

      setVisited(false);

    } else {
      // 保存
      visitedCafes.push(selectedCafe);

      localStorage.setItem(
        "visitedCafes",
        JSON.stringify(visitedCafes)
      );

      setVisited(true);
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

                {/* ❤️ お気に入り */}
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

                {/* 📍 行ったところ */}
                <button
                  onClick={handleVisited}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "28px",
                    color: visited ? "green" : "gray",
                  }}
                >
                 {visited ? <ImCheckmark /> : <ImCheckmark2 />}
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