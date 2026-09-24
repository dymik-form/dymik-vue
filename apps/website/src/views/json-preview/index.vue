<template>
    <div class="preview-layout">
        <!-- Header -->
        <header class="header">
            <RouterLink to="/" class="logo">
                <img src="/public/logo.png" alt="Dymik Logo" class="logo" />
            </RouterLink>
            <Button label="Get Started" class="p-button-raised p-button-primary cta-button" @click="navigateToDocs" />
        </header>

        <div class="content-wrapper">
            <!-- Side Panel -->
            <aside class="side-panel">
                <Menu :model="menuItems" />
            </aside>

            <!-- Main Content -->
            <main class="main-content">
                <router-view />
                <!-- <simple /> -->
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Menu from 'primevue/menu';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
// import simple from './simple/simple.vue';

const router = useRouter();

const menuItems = ref([
    {
        label: 'Login Form',
        icon: 'pi pi-sign-in',
        command: () => {
            window.location.href = '/preview/form?id=login';
        },
    },
    {
        label: 'Register Form',
        icon: 'pi pi-user-plus',
        command: () => {
            window.location.href = '/preview/form?id=register';
        },
    },
]);

const navigateToDocs = () => {
    router.push('/docs');
};

onMounted(() => {
    if (window.location.pathname === '/preview') {
        window.location.href = '/preview/form?id=login';
    }
});
</script>

<style scoped>
.preview-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
}

.logo {
    height: 40px;
}

.content-wrapper {
    display: flex;
    flex: 1;
}

.side-panel {
    width: 250px;
    background-color: #f0f0f0;
    padding: 1rem;
    border-right: 1px solid #ddd;
}

.main-content {
    flex: 1;
    padding: 1rem;
}

.cta-button {
    margin-left: 1rem;
}
</style>