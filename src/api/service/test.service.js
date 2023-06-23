export default api => {
	api.Test = {
		getTest(dto) {
            return api.instance.request({
                method: 'post',
				url: `projects/search`,
				data: dto
            })
        },
	}
}