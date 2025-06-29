new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/imag1.jpg",
          img2: "images/imag9.jpg",
          img3: "images/imag5.jpg",
          title: "Friends",
          isOpen: false,
        },
        {
          img1: "images/imag4.jpg",
          img2: "images/imag3.jpg",
          img3: "images/imag6.jpg",
          title: "Together",
          isOpen: false,
        },
        {
          img1: "images/imag7.jpg",
          img2: "images/imag8.jpg",
          img3: "images/imag2.jpg",
          title: "Selfie",
          isOpen: false,
        },
        {
          img1: "images/imag10.jpg",
          img2: "images/imag11.jpg",
          img3: "images/imag12.jpg",
          title: "Enjoy",
          isOpen: false,
        },
        {
          img1: "images/imag13.jpg",
          img2: "images/imag14.jpg",
          img3: "images/imag15.jpg",
          title: "Tour",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
