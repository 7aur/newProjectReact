import React from 'react';
interface ISendData {
    props: {
        url: String,
        data: any,
        payload: any,
        method: String
    }
}

export class HttpsModule extends React.Component<ISendData | any> {
    componentDidMount() {
        this.props.data.clearBlog([])
        this.fetchData();
    }

    fetchData = async () => {
        switch (this.props.props.method) {
            case "POST":
                let fetchData = await fetch(`${this.props.props.url}`, {
                    method: this.props.props.method,
                    body: JSON.stringify(this.props.props.data),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });
                let response = await fetchData.json();
              
                return this.props.props.payload([response]);
            case "GET":
                fetchData = await fetch(`${this.props.props.url}`);
                response = await fetchData.json();
                return this.props.props.payload(response.result)
        }
    }

    render() {
        return (
            <React.Fragment></React.Fragment>
        );
    }
}


export default HttpsModule
