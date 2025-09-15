import { useState } from "react";
import { motion, type Variants } from "framer-motion";

// 이미지 경로 (public/ 에 넣었다면 "/파일명" 형식)
const logoHero = "/jjigaerun.jpeg";
const shirtImage = "/run2.jpeg";

const IG_HANDLE = "jjigaeerrday";
const IG_LINK = `https://instagram.com/${IG_HANDLE}`;

// 지도 주소 및 딥링크
const STORE_ADDRESS = "서울특별시 영등포구 영신로 37길 3";
const NAVER_MAPS_URL = `https://map.naver.com/v5/search/${encodeURIComponent(
  STORE_ADDRESS
)}`;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  STORE_ADDRESS
)}`;

interface Slot {
  date: string;
  dayLabel: string;
  time: string;
  status: "open" | "closed";
}

const SLOTS: Slot[] = [
  {
    date: "2025-09-22",
    dayLabel: "(월)",
    time: "10:30 ~ 12:00",
    status: "closed",
  },
  {
    date: "2025-09-27",
    dayLabel: "(토)",
    time: "12:30 ~ 14:00",
    status: "open",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function JjigaeRun() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const dateKorean = (date: string) =>
    new Date(date + "T00:00:00").toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white text-neutral-900 flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black shadow-sm group-hover:shadow-md transition-shadow">
              JR
            </span>
            <span className="font-bold tracking-tight group-hover:text-orange-600 transition-colors">
              JJIGAE RUN
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-neutral-700">
            <a href="#about" className="hover:text-orange-600 transition">
              코스
            </a>
            <a href="#place" className="hover:text-orange-600 transition">
              장소
            </a>
            <a href="#schedule" className="hover:text-orange-600 transition">
              일정
            </a>
            <a href="#join" className="hover:text-orange-600 transition">
              참가방법
            </a>
            <a href="#shop" className="hover:text-orange-600 transition">
              티셔츠
            </a>
          </nav>

          {/* DM 버튼 (데스크탑) */}
          <div className="hidden md:block">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-orange-600 px-3 py-1.5 text-sm font-semibold text-orange-700 hover:bg-orange-50"
            >
              인스타 DM
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md  p-2"
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
          >
            <span className="block h-0.5 w-5 bg-neutral-800 mb-1" />
            <span className="block h-0.5 w-5 bg-neutral-800 mb-1" />
            <span className="block h-0.5 w-5 bg-neutral-800" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 shadow">
            <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-semibold text-neutral-700">
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="hover:text-orange-600 transition"
              >
                코스
              </a>
              <a
                href="#place"
                onClick={() => setMobileOpen(false)}
                className="hover:text-orange-600 transition"
              >
                장소
              </a>
              <a
                href="#schedule"
                onClick={() => setMobileOpen(false)}
                className="hover:text-orange-600 transition"
              >
                일정
              </a>
              <a
                href="#join"
                onClick={() => setMobileOpen(false)}
                className="hover:text-orange-600 transition"
              >
                참가방법
              </a>
              <a
                href="#shop"
                onClick={() => setMobileOpen(false)}
                className="hover:text-orange-600 transition"
              >
                티셔츠
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-orange-600 px-3 py-1.5 text-sm font-semibold text-orange-700 hover:bg-orange-50 mt-2 text-center"
              >
                인스타 DM
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Initial Notice Modal */}
      {showNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowNotice(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-[61] w-[90%] max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setShowNotice(false)}
              aria-label="닫기"
              className="absolute right-3 top-3 rounded-md p-1 text-neutral-500 hover:bg-neutral-100"
            >
              ✕
            </button>
            <div className="p-6 text-center">
              <img
                src={shirtImage}
                alt="JJIGAE RUN 티셔츠"
                className="w-40 h-40 object-cover mx-auto rounded-xl shadow mb-4"
              />
              <h3 className="text-xl font-extrabold">
                티셔츠만 구매 가능합니다
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                현재 행사 접수는 DM으로 문의해주세요. <br /> 티셔츠는 단독
                구매가 가능해요.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={IG_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700"
                >
                  DM으로 문의
                </a>
                <button
                  onClick={() => setShowNotice(false)}
                  className="flex-1 rounded-xl border px-4 py-2 font-semibold hover:bg-neutral-100"
                >
                  JJIGAE RUN 신청하기
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <section id="top" className="relative overflow-hidden w-full">
        <div className="w-full px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              뜨끈한 <span className="text-orange-600">찌개</span>와 시원한{" "}
              <span className="text-orange-600">런닝</span>의 만남
            </h1>
            <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
              여의도 고구마런 코스를 함께 달리고, <br />
              <span className="font-semibold"> 영등포구 영신로 37길 3 2층</span>
              의 가게로 복귀해 <br /> 따끈한 찌개로 회복하는 특별 러닝 이벤트!{" "}
              <br />
              소수 정원으로 더욱 가깝고 안전하게 즐겨요.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-center justify-center md:justify-start">
              <a
                href="#schedule"
                className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white shadow hover:bg-orange-700 transition"
              >
                일정 보기
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-100 transition"
              >
                인스타 DM으로 신청
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={zoomIn}
          >
            <img
              src={logoHero}
              alt="JJIGAE RUN 로고"
              className="w-full max-w-md rounded-2xl shadow-lg bg-white object-contain mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* About + Fee */}
      <section id="about" className="w-full px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start w-full">
          <motion.div
            className="rounded-2xl border border-neutral-200 p-6 bg-white w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl font-bold mb-2">코스</h2>
            <p className="text-neutral-700">
              여의도 <span className="font-semibold">고구마런</span> 코스를 달린
              후, <br />
              <span className="font-semibold">
                {" "}
                가게(서울특별시 영등포구 영신로 37길 3 2층)
              </span>
              로 복귀
            </p>
            <ul className="mt-4 list-none text-neutral-700 space-y-1">
              <li>페이스: 소통형 러닝 (초보 환영)</li>
              <li>인솔자와 함께 안전하게 이동</li>
              <li>완주 후 뜨끈한 찌개 식사!</li>
            </ul>
          </motion.div>

          <motion.div
            id="fee"
            className="rounded-2xl border border-neutral-200 p-6 bg-white w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl font-bold mb-2">참가비 & 정원</h2>
            <div className="text-3xl font-extrabold text-orange-600">
              35,000원
            </div>
            <p className="text-sm text-neutral-600">티셔츠 + 찌개 식사 포함</p>
            <p className="mt-3">
              모집 인원: 한 타임당 선착순 <b>15명</b> <br />
              (소수라도 진행)
            </p>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700 transition shadow w-full"
            >
              인스타 DM으로 신청
            </a>
          </motion.div>
        </div>
      </section>

      {/* Place */}
      <section id="place" className="w-full px-4 py-12">
        <motion.div
          className="rounded-2xl border border-neutral-200 bg-white p-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl font-bold">집결 장소</h2>
          <p className="mt-2 text-neutral-700">여의도 지구대 앞 (집결/출발)</p>
          <p className="mt-3 text-sm text-neutral-600">
            완주 후: 서울특별시 영등포구 영신로 37길 3, 2층 (가게 복귀)
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 w-full">
            <a
              href={NAVER_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl border px-6 py-3 text-center text-base font-semibold hover:bg-neutral-100 transition"
            >
              네이버지도 열기
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl border px-6 py-3 text-center text-base font-semibold hover:bg-neutral-100 transition"
            >
              구글지도 열기
            </a>
          </div>
        </motion.div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="w-full px-4 py-12">
        <h2 className="text-2xl font-extrabold text-center">일정 & 시간</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 w-full">
          {SLOTS.map((s, idx) => (
            <motion.article
              key={idx}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow text-center w-full"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-lg font-bold">
                {dateKorean(s.date)} {s.dayLabel}
              </h3>
              <p className="text-neutral-700 mt-1">{s.time}</p>
              <p className="text-sm text-neutral-600 mt-2">정원 15명</p>
              <div className="mt-3">
                <span
                  className={
                    "inline-block rounded-full px-3 py-1 text-sm font-semibold " +
                    (s.status === "closed"
                      ? "bg-neutral-200 text-neutral-600"
                      : "bg-green-100 text-green-700")
                  }
                >
                  {s.status === "closed" ? "마감" : "신청 가능"}
                </span>
              </div>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className={
                  "mt-3 inline-block rounded-xl px-4 py-2 font-semibold transition " +
                  (s.status === "closed"
                    ? "cursor-not-allowed bg-neutral-200 text-neutral-500"
                    : "bg-orange-600 text-white hover:bg-orange-700")
                }
              >
                {s.status === "closed" ? "DM 문의" : "DM 신청"}
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Join */}
      <section id="join" className="w-full px-4 py-12">
        <motion.div
          className="rounded-2xl border border-neutral-200 bg-white p-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-extrabold mb-4 text-center">
            런닝 참가 방법
          </h2>
          <ol className="mt-4 space-y-3 text-neutral-800 list-none">
            <li>
              ① 인스타그램에서 <b>@{IG_HANDLE}</b> 계정을 열어요.
            </li>
            <li>
              ② 원하시는 <b>타임</b>과 <b>이름/연락처/티셔츠 사이즈</b>를 DM으로
              보내주세요.
            </li>
            <li>
              ③ 안내받은 계좌로 참가비 <b>35,000원</b> 입금하면 신청 완료!
            </li>
          </ol>
          <div className="text-center">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700 transition shadow"
            >
              인스타 DM 보내기
            </a>
          </div>
        </motion.div>
      </section>

      {/* Shop */}
      <section id="shop" className="w-full px-4 py-12">
        <motion.div
          className="rounded-2xl border border-neutral-200 bg-white p-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="md:flex items-center gap-8 w-full">
            <div className="md:w-1/2">
              <img
                src={shirtImage}
                alt="JJIGAE RUN 티셔츠"
                className="w-full max-w-md rounded-xl shadow mx-auto"
              />
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <h2 className="text-2xl font-extrabold mb-2">티셔츠 단독 구매</h2>
              <p className="mt-2 text-neutral-700">
                가격: <b>25,000원</b>
              </p>
              <p className="text-neutral-700">사이즈: S ~ XL</p>
              <p className="mt-3 text-sm text-neutral-600">
                * DM에 <b>티셔츠 단품</b>, 원하는 <b>사이즈</b>, <b>수량</b>을
                적어 보내주세요.
              </p>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700 transition shadow"
              >
                DM으로 구매 문의
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white w-full">
        <div className="w-full px-4 py-8 text-sm text-neutral-600 flex flex-col items-center gap-2 text-center">
          <p>© {new Date().getFullYear()} JJIGAE RUN</p>
          <p>
            문의:{" "}
            <a
              className="font-semibold text-orange-700 hover:underline"
              href={IG_LINK}
              target="_blank"
              rel="noreferrer"
            >
              @{IG_HANDLE}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
