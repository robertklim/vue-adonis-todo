<template>
    <Panel title="Tasks">
        <div
            class="tasks mt-2"
            v-for="task in tasks"
            :key="task.id"    
        >
            <EditableRecord 
                :isEditMode="task.isEditMode"
                :title="task.description"
                @onInput="setTaskDescription({
                    task,
                    description: $event,
                })"
                @onEdit="setEditMode(task)"
                @onSave="saveTask(task)"
                @onDelete="deleteTask(task)"
            >
            <v-icon
                @click="checkClicked(task)">
                {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
            </v-icon>
            </EditableRecord>
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
import EditableRecord from '@/components/EditableRecord.vue';
export default {
    components: {
        CreateRecord,
        EditableRecord,
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
            'deleteTask',
            'saveTask',
        ]),
        ...mapMutations('tasks', [
            'setNewTaskName',
            'setTaskDescription',
            'setEditMode',
            'unsetEditMode',
            'toggleCompleted'
        ]),
        checkClicked(task) {
            this.toggleCompleted(task);
            this.saveTask(task);
        },
    },
};
</script>

<style>
    .task {
        font-size: 1em;
    }
</style>
