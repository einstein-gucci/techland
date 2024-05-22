package ch.zhaw.techland.model.voucher;

import java.util.List;
import ch.zhaw.techland.model.Device;

public interface Voucher {

    public double getDiscount(List<Device> devices);

}
