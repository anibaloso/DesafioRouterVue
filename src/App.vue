<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'
// import ContactoView from '@/components/ContactoView.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    MediosPago,
  }
}
</script>

<template>
  <Navbar />
  <!-- <ContactoView /> -->
  <router-view />

  <medios-pago />
  <Footer />
</template>
