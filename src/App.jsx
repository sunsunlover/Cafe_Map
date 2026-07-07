import './App.css';
import Cafehome from './pages/cafehome';

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// 最初のページ（3秒後にPageBへ遷移）
function Cafehome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page1");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <h1>Page 1 - 3秒後にPage 1へ移動します</h1>;
}

// 遷移先ページ
function Page1() {
  return <h1>Page 1 に到着しました</h1>;
}

// メインAppコンポーネント
export default function App() {
  return (
    <Router>
      <Routes>
        {/* "/" にアクセスしたら Cafehome */}
        <Route path="/" element={<Cafehome />} />
        {/* "/page1" にアクセスしたら Page1 */}
        <Route path="/page1" element={<Page1 />} />
        {/* 例: カフェホームページ */}
        <Route path="/cafehome" element={<Cafehome />} />
      </Routes>
    </Router>
  );
}

export default App;