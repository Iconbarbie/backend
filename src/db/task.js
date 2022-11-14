

const Task = mongoose.model('task', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
});
