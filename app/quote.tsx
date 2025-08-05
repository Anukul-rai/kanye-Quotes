import { ActivityIndicator, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { fetchRandomQuote } from '@/api/quote'
import { Ionicons } from '@expo/vector-icons'

type QuoteType = {
  quote: string
}

export default function Quote() {
    const [quote, setQuote] = useState<QuoteType>({ quote: '' })
    const [loading, setLoading] = useState<boolean>(false)

    const opacity = useRef(new Animated.Value(1)).current

    const loadQuote = async () => {
        try {
        setLoading(true)
        // Fade out
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(async () => {
            const data: QuoteType = await fetchRandomQuote()
            setQuote(data)

            // Fade in
            Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            }).start()
        })
        } catch (err) {
        console.log('Error while fetching', err)
        } finally {
        setLoading(false)
        }
    }

    useEffect(() => {
        loadQuote()
    }, [])

    const refreshQuotes = () => {
        loadQuote()
    }

    if (loading && !quote.quote) {
        
        return (
        <View style={styles.loader}>
            <ActivityIndicator color={'red'} size={30} />
        </View>
        )
    }

    return (
        <View style={styles.container}>
        <Animated.Text style={[styles.quotes, { opacity }]}>
            <Text>"{quote.quote}"</Text>
        </Animated.Text>
        <View>
            <TouchableOpacity
            onPress={refreshQuotes}
            accessibilityLabel="refresh button"
            style={styles.button}
            activeOpacity={0.8}
            disabled={loading} // optional: prevent spam
            >
            <Ionicons name="refresh" size={20} color={'white'} />
            <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quotes: {
        fontSize: 20,
        fontWeight: '500',
        color: 'blue',
        textAlign: 'center',
        padding: 10,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
    },
    refreshText: {
        color: 'white',
        fontSize: 14,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
