<script>
export default {
    methods: {
        volverAInicio() {
            return this.$router.push({ name: 'home' })
        }
    },
    props:{
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        cantidad: {
            type: String,
            required: true}
    }
}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="about">
                    <h1>Pagina de Contacto</h1>
                    <button @click="volverAInicio" class="btn btn-success">Regresar</button>
                    <p>hola {{ nombre }}</p>
                </div>
            
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    margin-top: 10rem;
    margin-bottom: 10rem;
}
</style>