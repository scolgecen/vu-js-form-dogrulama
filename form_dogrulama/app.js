const app = new Vue({
  el: "#app",
  name: "scolgecen.com | Serdar Çölgeçen",
  data: {
    errors: [],
    adsoyad: "",
    sifre: "",
    sifre2: "",
    email: "",
    ilgi_alanlari: [],
  },
  methods: {
    kaydet(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.adsoyad) this.errors.push("Adsoyad alanı gerekli");
      if (!this.email) this.errors.push("Email alanı gerekli");
      if (!this.validEmail(this.email))
        this.errors.push("Email alanı geçerli değil");
      if (!this.sifre && !this.sifre2) this.errors.push("Şifre alanı gerekli");
      if (this.sifre !== this.sifre2)
        this.errors.push("Şifre ve tekrarı aynı olmalıdır");

      if (this.errors.length === 0) {
        let msg = "Form verileri kaydedildi.";
        console.log(msg);
        toastr.success(msg);
      } else {
        console.log("Form hatalı");

        let msg = "";
        this.errors.forEach((value) => {
          msg += value + "<br>";
        });
        toastr.error(msg);
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
});
