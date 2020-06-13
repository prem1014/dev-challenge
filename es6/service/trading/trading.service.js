module.exports = {
    initStompClinet: () => {
        const API_URL = 'ws://localhost:8011/stomp';
        let stompClInstance = null;
        stompClInstance = Stomp && Stomp.client(API_URL);
        return stompClInstance;
    }
}