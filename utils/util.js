module.exports = {
  prepareResponse: function(status, result) {
        return {
            'ack': status,
            'results': result
        };
    },
  prepareResponseData: function(status, result, resultData) {
        return {
            'ack': status,
            'results': result,
            'data': resultData
        };
    }
};
