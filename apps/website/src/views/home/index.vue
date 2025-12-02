<template>
    <div class="landing-page">
        <!-- Header -->
        <header class="header">
            <img src="/public/logo.png" alt="Dymik Logo" class="logo" />
            <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
                <a href="https://github.com/dymik-form/dymik" target="_blank" class="nav-link">
                    <i class="pi pi-github"></i>
                </a>
                <a href="/preview" class="nav-link">Preview</a>
                <Button label="Get Started" class="p-button-raised p-button-primary cta-button" @click="navigateToDocs" />
            </nav>
            <Button icon="pi pi-bars" class="menu-toggle" @click="toggleMenu" />
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <h1>
                Create <span class="dynamic-forms-effect">Dynamic Forms</span> Effortlessly
            </h1>
            <p class="hero-description">The perfect solution for developers to create forms effortlessly and save valuable time. Built with Vue.js for seamless integration.</p>
            <div class="hero-buttons">
                <Button label="Get Started" class="p-button-raised p-button-primary" @click="navigateToDocs" />
                <Button label="Preview" class="p-button-outlined p-button-secondary" >
                    <RouterLink to="/preview" class="nav-link">Preview</RouterLink>
                </Button>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="features">
            <h2>Key Features</h2>
            <div class="feature-list">
                <Card style="width: 25rem; overflow: hidden">
                    <template #title>
                        <i class="pi pi-cog" style="display: block; font-size: 3rem; margin-bottom: 0.5rem;"></i>
                        Easy Customization
                    </template>
                    <template #content>
                        <p class="m-0">Create forms with field configurations easily, avoiding traditional hard coding.</p>
                    </template>
                </Card>
                <Card style="width: 25rem; overflow: hidden">
                    <template #title>
                        <i class="pi pi-cloud" style="display: block; font-size: 3rem; margin-bottom: 0.5rem;"></i>
                        Powerful Integration
                    </template>
                    <template #content>
                        <p class="m-0">This framework is independent of any Vue UI or backend API, making integration seamless and flexible.</p>
                    </template>
                </Card>
                <Card style="width: 25rem; overflow: hidden">
                    <template #title>
                        <i class="pi pi-eye" style="display: block; font-size: 3rem; margin-bottom: 0.5rem;"></i>
                        Visibility Control Support
                    </template>
                    <template #content>
                        <p class="m-0">Easily control the visibility of form fields.</p>
                    </template>
                </Card>
                <Card style="width: 25rem; overflow: hidden">
                    <template #title>
                        <i class="pi pi-check" style="display: block; font-size: 3rem; margin-bottom: 0.5rem;"></i>
                        Advanced Validation
                    </template>
                    <template #content>
                        <p class="m-0">Fully integrated with <strong>Zod</strong> and <strong>ArkType</strong> for advanced and seamless validation capabilities.</p>
                    </template>
                </Card>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>&copy; 2025 Dymik Form. All rights reserved.</p>
            <!-- <nav class="footer-nav">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
            </nav> -->
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const navigateToDocs = () => {
    window.location.href = '/docs/index.html';
};
</script>

<style scoped>
.landing-page {
    text-align: center;
    width: 100%;
    min-height: 100vh;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
    position: relative;
}

.logo {
    height: 40px;
}

.nav {
    display: flex;
    gap: 1rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
}

.nav.nav-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f8f9fa;
    padding: 1rem;
    border-top: 1px solid #ddd;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

.menu-toggle {
    display: none;
}

.cta-button {
    margin-left: 1rem;
}

@media (max-width: 768px) {
    .nav {
        display: none;
    }

    .menu-toggle {
        display: inline-flex;
    }

    .nav.nav-open {
        display: flex;
    }
}

.hero {
    margin-bottom: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;

    flex-direction: column;
    align-items: center;
}

.hero-description {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem; /* Increased font size */
  font-weight: 500;
  border-radius: 5px;
  max-width: 720px; /* Limit the width to prevent overly long lines */
  text-align: center; /* Center align the text */
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.features {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--p-surface-200);
    padding-top: 2rem;
    padding-bottom: 6rem;

    h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: bold;
    }
}

.feature-list {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.footer {
    margin-top: 4rem;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    border-top: 1px solid #ddd;
    text-align: center;
}

.footer-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
}

.footer-link {
    text-decoration: none;
    color: #333;
}

.dynamic-forms-effect {
  background: linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>