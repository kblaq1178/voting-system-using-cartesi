const CartesiRollups = require('@cartesi/rollups');

class RollupStateHandler {
    constructor() {
        this.state = new CartesiRollups();
    }

    async sendNotice(notice) {
        await this.state.sendNotice(notice);
    }

    async issueVoucher(voucher) {
        await this.state.issueVoucher(voucher);
    }

    async reportResult(result) {
        await this.state.report(result);
    }
}

module.exports = RollupStateHandler;
