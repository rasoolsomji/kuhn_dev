export default function Work(props) {
  return (
  <div class="flex flex-col md:flex-row text-center md:text-left mt-8 mb-8 lg:mb-2">
    <div class="md:w-1/3">
      <div class="flex justify-center md:justify-start">
        <span class="flex-shrink-0">
          <img src={props.img} class="w-32 h-auto" alt={props.company} />
        </span>
        <div class="relative w-full ml-3 hidden md:block">
          <span class="h-0.5 bg-hunterGreen-light absolute inset-x-0 top-1/2 transform -translate-y-1/2"></span>
        </div>
      </div>
    </div>
    <div class="md:w-2/3">
      <div class="flex md:pl-18 relative">
        <span class="border-2 border-hunterGreen-dark rounded-full w-4 h-4 absolute left-8 top-1 bg-white hidden md:block"></span>

        <div class="mt-1 flex">
          <i class="bx bxs-right-arrow text-primary hidden md:block"></i>
          <div class="md:pl-14 md:-mt-1">
            <span class="font-body font-bold text-hunterGreen-dark block">{props.date}</span>
            <span class="font-header font-bold text-xl text-primary uppercase block pt-2">{props.title}</span>
            <div class="pt-2">
              <span class="font-body text-black block">{props.children}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
