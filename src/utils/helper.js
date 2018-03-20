import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
const DECK_STORAGE_KEY = 'flashCards:deck'
const NOTIFICATION_KEY = 'flashCards:notifications'


function setDummyData () {

    let dummyData = {
        Beer: {
            title: 'Beer',
            questions: [
                {
                    question: 'Which of the following is an Imperial Stout or Porter',
                    answer: 'Oskar Blues Ten Fidy',
                    incorrectAnswers: ['Kross5', 'Emelisse Lentebock', "Bell's Oarsman", 'Hitachino Nest White Ale']
                },
                {
                    question: 'Which of the following is not a Weissbier Family',
                    answer: 'Magic Rock Magic 8 Ball',
                    incorrectAnswers: ['Schneider Aventinus', 'Schneider Tap5', "Piece Dark-n-Curvy", 'The Kernel API']

                }
            ]
        },
        BREWING: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'Which of the following is an last step of the brewing process',
                    answer: 'Fermentation & Conditioning',
                    incorrectAnswers: ['Copper / Kettle', 'Mash Tun', "Whirlpool", 'Colling']
                }
            ]
        }
    }

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

    return dummyData
}

export function formatDeckResults (results) {
    // 아직 mergeItem 안해서 getItem 할 data 가 없으면
    return results === null
        ? setDummyData()
        : JSON.parse(results)
}

// asyncStorage 안쓰고 Redux 만 사용해서 데이터 처리하면
// notification 이랑 permission 어떻게 처리하지
export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Keep Going!',
        body: "👋 don't forget to study today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
