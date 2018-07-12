### modal

    initialState = { isOpen: false }
    ;<div>
    <Button onClick={() => setState({ isOpen: true })}>Open</Button>
    <Modal isOpen={state.isOpen}>
        <h3>Awesome Modal !</h3>
        <Button onClick={() => setState({ isOpen: false })}>Close</Button>
    </Modal>
    </div>
