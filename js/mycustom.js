$('#inline-popups, #inline-popups-1, #inline-popups-2, #inline-popups-3, #inline-popups-4, #inline-popups-5, #inline-popups-6, #inline-popups-7, #inline-popups-8, #inline-popups-9, #inline-popups-10, #inline-popups-11, #inline-popups-12, #inline-popups-13,#inline-popups-14,#inline-popups-15,#inline-popups-16,#inline-popups-17,#inline-popups-18,#inline-popups-19,#inline-popups-20,#inline-popups-21,#inline-popups-22,#inline-popups-23,#inline-popups-24,#inline-popups-25,#inline-popups-26,#inline-popups-27,#inline-popups-28,#inline-popups-29,#inline-popups-30,#inline-popups-31,#inline-popups-32,#inline-popups-33,#inline-popups-34,#inline-popups-35,#inline-popups-36,#inline-popups-37,#inline-popups-38,#inline-popups-39,#inline-popups-40,#inline-popups-41,#inline-popups-42,#inline-popups-43,#inline-popups-44,#inline-popups-45,#inline-popups-46,#inline-popups-47,#inline-popups-48,#inline-popups-49,#inline-popups-50,#inline-popups-51,#inline-popups-52,#inline-popups-53,#inline-popups-54,#inline-popups-55,#inline-popups-56,#inline-popups-57').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


