<template>
    <Panel title="Tasks">
        <div
            class="tasks mt-2"
            v-for="task in tasks"
            :key="task.id"    
        >
            {{ task.description }}
        </div>

        <CreateRecord 
            placeholder="Task..."
            @onInput="setNewTaskName"
            :value="newTaskName"
            @create="createTask"
        />
    </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
export default {
    components: {
        CreateRecord,
    },
    computed: {
        ...mapState('tasks', [
            'tasks',
            'newTaskName',
        ]),
    },
    methods: {
        ...mapActions('tasks', [
            'createTask',
        ]),
        ...mapMutations('tasks', [
            'setNewTaskName',
        ]),
    },
};
</script>

<style>
    .task {
        font-size: 1em;
    }
</style>
