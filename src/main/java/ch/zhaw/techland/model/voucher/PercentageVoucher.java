package ch.zhaw.techland.model.voucher;

import java.util.List;
import ch.zhaw.techland.model.Device;

public class PercentageVoucher implements Voucher {

    private int discount = 0;

    public PercentageVoucher(int discount) {
        this.discount = discount;
    }

    @Override
    public double getDiscount(List<Device> devices) {
        var totalPrice = devices.stream().mapToDouble(p -> p.getMietpreis()).sum();
        return totalPrice * ((double) discount / 100);
    }

}
