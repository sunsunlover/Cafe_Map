import { Sheet } from "react-modal-sheet";

  function BottomSheet({ open, setOpen, selectedCafe, snapIndex, setSnapIndex, setSelectedCafe }) {

  return (
    <Sheet
      isOpen={open}
      onClose={() => setOpen(false)}
      snapPoints={[0.8, 0.45, 0.12]}
      initialSnap={2}
      snap={snapIndex}
      onSnap={setSnapIndex}
    >
      <Sheet.Container>
        <Sheet.Header />

        <Sheet.Content>
            {selectedCafe ? (
                <div style={{ padding: "20px" }}>
                  <button onClick={() => setSelectedCafe(null)}>
                     ← メニューに戻る
                  </button>            
                    <img
                      src={selectedCafe.image}
                      alt={selectedCafe.name}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                    <h2>{selectedCafe.name}</h2>

                    <p>{selectedCafe.description}</p>
                </div>
            ) : (
          <div style={{ padding: "20px" }}>
            <h3>メニュー</h3>

            <button>提案</button>
            <br /><br />

            <button>マイリスト</button>
            <br /><br />

            <button>メモリー</button>
            
          </div>
          
            )}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default BottomSheet;