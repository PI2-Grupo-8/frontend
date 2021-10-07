import { sensorsAPI } from './baseServices';

export const getAlerts = async () => {
    try {
        const response = await sensorsAPI.get(`/alerts?status=all`)

        const closed = []
        const opened = []

        response.data?.forEach(alert => {
            if (alert.finishedAt) {
                closed.push(alert);
            } else {
                opened.push(alert);
            }
        })

        return { success: true, data: {
            closed,
            opened   
        }}
    } catch (error) {
        return { success: false, data: error.response };
    }
}