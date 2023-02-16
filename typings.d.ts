interface Message {
    text: string;
    createdAt: OfflineAudioCompletionEventInit.firestore.TimeStamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}