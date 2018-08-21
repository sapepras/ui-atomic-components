### modal

    initialState = { isOpen: false }
    ;<div>
    <Button onClick={() => setState({ isOpen: true })}>Open</Button>
    <Modal isOpen={state.isOpen}>
        <h3>Awesome Modal !</h3>
        <input type="button" value="Button" />
                <input type="text" />
        <Button onClick={() => setState({ isOpen: false })}>Close</Button>
        <input type="button" />
                        <input type="text" />
    </Modal>
    </div>
