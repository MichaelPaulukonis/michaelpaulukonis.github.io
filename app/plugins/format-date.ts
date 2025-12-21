export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatDate: (dateStr) => (dateStr ? Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(dateStr)) : undefined)
        }
    };
});
