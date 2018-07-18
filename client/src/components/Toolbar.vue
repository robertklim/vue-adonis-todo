<template>
    <v-toolbar color="green" dark fixed>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="mr-4">TODO IN VUE</v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat>
            <v-icon class="pr-2">playlist_add_check</v-icon>
            PROJECTS
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/register">
            <v-icon class="pr-2">account_box</v-icon>
            Register
            </v-btn>
            <v-btn flat>
            <v-icon class="pr-2">fingerprint</v-icon>
            Login
            </v-btn>
            <v-btn flat>
            <v-icon class="pr-2">exit_to_app</v-icon>
            Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    
};
</script>

<style>

</style>
