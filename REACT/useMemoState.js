// stwórz hooka, który będzie zmemoizowaną wersją useState dla

// jeśli ten kod tworzący state
const [value, setter] = useMemoState({val:0})

// zostanie wywołany w ten sposób i zadziała:
setter({val:0}) // -> tu zostanie wykonana zmiana stanu

setter({val:0})  // -> tu nie zostanie wykonana zmiana stanu




