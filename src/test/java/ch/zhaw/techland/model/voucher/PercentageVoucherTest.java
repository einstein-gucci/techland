package ch.zhaw.techland.model.voucher;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceType;

public class PercentageVoucherTest {

    @Test
    public void testVoucher_withoutDevices() {
        var voucher = new PercentageVoucher(7);
        assertEquals(0, voucher.getDiscount(new ArrayList<Device>()), 0.01);
    }

    @ParameterizedTest
    @ValueSource(ints = { 1, 2, 5, 20, 49, 50 })
    public void testVoucher_singleDevice_multipleValues(int discount) {
        var voucher = new PercentageVoucher(discount);
        var device = new Device("desc1", "desc1", DeviceType.COMPUTER, 50.0);
        assertEquals(50 * discount / 100.0, voucher.getDiscount(Arrays.asList(device)), 0.01);
    }

    @Test
    public void testVoucher_withDevices() {
        var voucher = new PercentageVoucher(42);
        var device1 = new Device("desc1", "desc1", DeviceType.COMPUTER, 77.0);
        var device2 = new Device("desc2", "desc2", DeviceType.COMPUTER, 42.0);

        assertEquals(49.98, voucher.getDiscount(Arrays.asList(device1, device2)), 0.01);
    }

}
