export default function AnimatedWordmark() {
  return (
    <div
      dir="ltr"
      className="relative mt-1 flex w-full min-w-0 justify-center px-4 sm:px-5"
    >
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] scale-[0.72] origin-center sm:scale-[0.82] lg:scale-[0.9]">
          <div
            className="melbet-wordmark justify-center text-[clamp(1.4rem,5.6vw,2rem)] md:text-[clamp(2.2rem,6vw,3.6rem)]"
            aria-label="MELBET"
          >
            <span className="melbet-letter melbet-letter--white">M</span>
            <span className="melbet-letter melbet-letter--white">E</span>
            <span className="melbet-letter melbet-letter--white">L</span>
            <span className="melbet-letter melbet-letter--yellow">B</span>
            <span className="melbet-letter melbet-letter--yellow">E</span>
            <span className="melbet-letter melbet-letter--yellow">T</span>
          </div>
        </div>
      </div>
    </div>
  );
}